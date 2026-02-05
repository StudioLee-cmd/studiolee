from PIL import Image
import os

def remove_white_bg_smart(input_path, output_path, threshold=230, tolerance=10):
    """
    Remove white/near-white background from an image while preserving the subject.
    Uses a smarter approach that checks if a pixel is "white-ish" (high R, G, B values).
    """
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()

        newData = []
        for item in datas:
            r, g, b, a = item
            # Check if pixel is white-ish (all channels above threshold)
            # AND if the channels are similar (avoiding colored pixels)
            is_white = r > threshold and g > threshold and b > threshold
            channels_similar = abs(r - g) < tolerance and abs(g - b) < tolerance and abs(r - b) < tolerance
            
            if is_white and channels_similar:
                # Make transparent
                newData.append((255, 255, 255, 0))
            else:
                # Keep original
                newData.append(item)

        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"✓ Processed {input_path} -> {output_path}")
        
        # Verify the output is not empty
        check = Image.open(output_path)
        non_transparent = sum(1 for p in check.getdata() if p[3] > 0)
        print(f"  Non-transparent pixels: {non_transparent}")
        if non_transparent == 0:
            print(f"  ⚠ WARNING: Image appears to be fully transparent!")
            
    except Exception as e:
        print(f"✗ Error processing {input_path}: {e}")

# Process files
files = [
    ("horizontal logo 2: main.png", "public/images/brand/logo-header-v2.png"),
    ("sqaure:vertical logo.png", "public/images/brand/logo-footer-v2.png"),
    ("logo brain.png", "public/favicon-v2.png"),
]

print("Starting logo processing...")
for inp, out in files:
    if os.path.exists(inp):
        remove_white_bg_smart(inp, out)
    else:
        print(f"✗ File not found: {inp}")
print("Done!")
