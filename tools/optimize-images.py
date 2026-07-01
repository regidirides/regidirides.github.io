#!/usr/bin/env python3
"""
Optimise images for the website (keeps the repo small and pages fast).

Resizes images so the longest side is at most MAX_PX and re-encodes them at a
sensible quality. Run it on a folder of new event photos BEFORE committing:

    python3 tools/optimize-images.py image/events/2024-noto-earthquake/

Options:
    --max 1600     longest-side limit in pixels (default 1600)
    --quality 82   JPEG/WebP quality (default 82)
    --inplace      overwrite the originals (default: write *-web.jpg copies)

Requires Pillow:  python3 -m pip install Pillow
"""
import argparse, os, sys
from PIL import Image

EXTS = {".jpg", ".jpeg", ".png", ".webp"}

def optimize(path, max_px, quality, inplace):
    try:
        im = Image.open(path)
    except Exception as e:
        print(f"  skip {path}: {e}")
        return
    w, h = im.size
    scale = min(1.0, max_px / max(w, h))
    if scale < 1.0:
        im = im.resize((round(w * scale), round(h * scale)), Image.LANCZOS)
    root, ext = os.path.splitext(path)
    ext = ext.lower()
    out = path if inplace else f"{root}-web{ext}"
    save_kw = {}
    if ext in (".jpg", ".jpeg", ".webp"):
        im = im.convert("RGB") if ext != ".webp" else im
        save_kw = dict(quality=quality, optimize=True)
    elif ext == ".png":
        save_kw = dict(optimize=True)
    before = os.path.getsize(path)
    im.save(out, **save_kw)
    after = os.path.getsize(out)
    print(f"  {os.path.basename(path)}: {w}x{h} {before//1024}KB -> "
          f"{im.size[0]}x{im.size[1]} {after//1024}KB  ({os.path.basename(out)})")

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("paths", nargs="+", help="image files or folders")
    ap.add_argument("--max", type=int, default=1600)
    ap.add_argument("--quality", type=int, default=82)
    ap.add_argument("--inplace", action="store_true")
    a = ap.parse_args()
    files = []
    for p in a.paths:
        if os.path.isdir(p):
            for n in sorted(os.listdir(p)):
                if os.path.splitext(n)[1].lower() in EXTS:
                    files.append(os.path.join(p, n))
        elif os.path.splitext(p)[1].lower() in EXTS:
            files.append(p)
    if not files:
        print("No images found.")
        sys.exit(1)
    print(f"Optimising {len(files)} image(s) (max {a.max}px, q{a.quality}, "
          f"{'in place' if a.inplace else '-web copies'}):")
    for f in files:
        optimize(f, a.max, a.quality, a.inplace)

if __name__ == "__main__":
    main()
