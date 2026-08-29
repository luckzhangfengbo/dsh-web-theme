from PIL import Image
import os

base = "/Users/zhangfengbo/git/gitee.com/dsh-web-theme"

# 1. 重新生成预览缩略图 (230px 宽)
for theme_id, new_name in [("01","pine"),("02","jiangnan"),("03","bamboo"),("04","plum"),("05","landscape")]:
    src = os.path.join(base, "themes", f"{theme_id}.png")
    dst = os.path.join(base, "docs/previews", f"{new_name}.png")
    img = Image.open(src)
    w, h = img.size
    ratio = 230 / w
    new_h = int(h * ratio)
    img_resized = img.resize((230, new_h), Image.LANCZOS)
    img_resized.save(dst, "PNG", optimize=True)
    new_size = os.path.getsize(dst)
    print(f"缩略图: {new_name}.png ({img.size} -> 230x{new_h}, {new_size//1024}KB)")

# 2. 压缩截图 (宽降到 800px)
for hero_file in ["pine-hero.png", "jiangnan-hero.png", "bamboo-hero.png"]:
    src = os.path.join(base, "docs/screenshots", hero_file)
    img = Image.open(src)
    w, h = img.size
    if w > 800:
        ratio = 800 / w
        new_h = int(h * ratio)
        img_resized = img.resize((800, new_h), Image.LANCZOS)
        img_resized.save(src, "PNG", optimize=True)
        new_size = os.path.getsize(src)
        print(f"压缩截图: {hero_file} ({img.size} -> 800x{new_h}, {new_size//1024}KB)")

# 3. 优化主题图 (保持分辨率但优化压缩)
for theme_id in ["01","02","03","04","05"]:
    src = os.path.join(base, "themes", f"{theme_id}.png")
    img = Image.open(src)
    w, h = img.size
    img.save(src, "PNG", optimize=True)
    new_size = os.path.getsize(src)
    print(f"优化主题: {theme_id}.png ({img.size}, {new_size//1024}KB)")

print("\n完成!")
