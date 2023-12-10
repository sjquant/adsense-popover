# Adsense Popover

## What is 'Adsense Popover'?

Adsense-Popover is a custom element web component that displays Google AdSense in a slide-over format. This approach allows you to show ads without disrupting the content area, making it a subtle yet effective way to catch user attention.

![Adsense-Popover.gif](images/adsense-popover-1.gif)

## Why Use 'Adsense Popover'?

- **Non-intrusive**: Display ads without compromising your content's integrity.
- **Engaging**: The slide-over format is more likely to draw user attention.

## How to Use?

1. **Include the Script**: Add the following code inside the `<head>` tag of your HTML document.

   ```html
   <head>
     ...
     <!-- Adsense-Popover -->
     <script src="https://cdn.jsdelivr.net/gh/sjquant/adsense-popover@v0.1.0/dist/adsense-popover.min.js"></script>
   </head>
   ```

2. **Place the Element**: Insert the `adsense-popover` element anywhere within the `<body>` tag.

   ```html
   <body>
     <adsense-popover
       layoutKey="<your-layout-key>"
       client="<your-client>"
       slot="<your-slot>"
       format="<your-format>"
     ></adsense-popover>
     ...
   </body>
   ```

## Options

Here are the customizable options for 'Adsense Popover', with detailed explanations for each:

| Option             | Default Value | Description                                                                                                                                                                          |
| ------------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| width              | 400           | Width of the popover in pixels.                                                                                                                                                      |
| height             | 140           | Height of the popover in pixels.                                                                                                                                                     |
| padding            | 8             | Padding inside the popover in pixels.                                                                                                                                                |
| offsetX            | 16            | Horizontal offset from the edge in pixels.                                                                                                                                           |
| offsetY            | 16            | Vertical offset from the bottom in pixels.                                                                                                                                           |
| animationDuration  | 0.5           | Duration of the slide-over animation.                                                                                                                                                |
| horizontalPosition | "right"       | Determines the horizontal alignment of the popover on the screen. Options are "left", "right", or "center". For example, "right" aligns the popover to the right edge of the screen. |
| verticalPosition   | "bottom"      | Determines the vertical alignment of the popover on the screen. Options are "bottom" or "top". For example, "bottom" aligns the popover to the bottom edge of the screen.            |
| timeout            | 2000          | Delay before the popover appears in ms.                                                                                                                                              |
| layoutKey          | ""            | AdSense layout key.                                                                                                                                                                  |
| slot               | ""            | AdSense slot.                                                                                                                                                                        |
| client             | ""            | AdSense client ID.                                                                                                                                                                   |
| format             | "auto"        | Ad format, e.g., "auto", "rectangle".                                                                                                                                                |
| responsive         | "true"        | Whether the ad is responsive.                                                                                                                                                        |

## Q&A

1. **Do I need Google AdSense?**

   Yes, you need to have Google AdSense approval and set up AdSense on your site.

2. **How do I find Adsense Attributes?**

   In AdSense, create an 'In-feed ad' under 'Ads' → 'Ad units'. You'll find a code snippet with attributes starting with `data-`. Copy these values for `layoutKey`, `client`, `slot`, and `format`.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
