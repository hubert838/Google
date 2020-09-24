-logo-color: rgba(238,238,238,1);
    background: rgb(53, 54, 58);
}
html.inited body {
    display: block;
}
@media (prefers-color-scheme: dark)
body:not(.light-chip) {
    --text-color: rgb(var(--GG200-rgb));
    --text-color-light: rgb(var(--GG200-rgb));
}
body {
    background-attachment: fixed !important;
    cursor: default;
    display: none;
    font-size: small;
    margin: 0;
    min-height: 100%;
}
user agent stylesheet
body {
    display: block;
    margin: 8px;
}
:root {
    --dark_red: rgb(205, 0, 0);
    --grey: #777;
    --light_grey: #eee;
    --light_red: rgb(255, 68, 68);
    --active_icon_color: white;
    --button_shadow: rgba(0, 0, 0, .1);
    --inactive_icon_color: #999;
    --level_animation_color: #dbdbdb;
    --listening_icon_color: var(--light_red);
    --text_link_color: rgb(17, 85, 204);
}
@media (min-width: 672px)
html {
    --column-count: 5;
}
@media (min-width: 560px)
html {
    --column-count: 4;
}
html {
    --md-tile-margin: 16px;
    --md-tile-size: 112px;
    --column-count: 3;
    --content-width: calc(var(--column-count) * var(--md-tile-size) /* We add an extra pixel because rounding errors on different zooms can * make the width shorter than it should be. */ + 1px);
    --logo-color: #eee;
    --logo-height: 200px;
    --logo-margin-top: 56px;
    --logo-margin-bottom: 38px;
    --logo-iframe-initial-height: var(--logo-height);
    --logo-iframe-height: var(--logo-height);
    --logo-iframe-resize-duration: 150ms;
    --logo-iframe-width: 500px;
    --mv-notice-time: 10s;
    --text-color: #000;
    --text-color-light: #fff;
    height: 100%;
}
html {
    --dark-mode-bg-rgb: 53, 54, 58;
    --dark-mode-dialog-rgb: 41, 42, 45;
    --GG050-rgb: 248, 249, 250;
    --GG100-rgb: 241, 243, 244;
    --GG200-rgb: 232, 234, 237;
    --GG300-rgb: 218, 220, 224;
    --GG400-rgb: 189, 193, 198;
    --GG500-rgb: 154, 160, 166;
    --GG600-rgb: 128, 134, 139;
    --GG700-rgb: 95, 99, 104;
    --GG800-rgb: 60, 64, 67;
    --GG900-rgb: 32, 33, 36;
    --GB050-rgb: 232, 240, 254;
    --GB100-rgb: 210, 227, 252;
    --GB200-rgb: 174, 203, 250;
    --GB300-rgb: 138, 180, 248;
    --GB400-rgb: 102, 157, 246;
    --GB500-rgb: 66, 133, 244;
    --GB600-rgb: 26, 115, 232;
    --GB700-rgb: 25, 103, 210;
    --GB800-rgb: 24, 90, 188;
    --GB900-rgb: 23, 78, 166;
    --GB400-dark-rgb: 107, 165, 237;
    --GB600-dark-rgb: 37, 129, 223;
    --GR050-rgb: 252, 142, 230;
    --GR100-rgb: 250, 210, 207;
    --GR200-rgb: 246, 174, 169;
    --GR300-rgb: 242, 139, 130;
    --GR400-rgb: 238, 103, 92;
    --GR500-rgb: 234, 67, 53;
    --GR600-rgb: 217, 48, 37;
    --GR700-rgb: 197, 34, 31;
    --GR800-rgb: 179, 20, 18;
    --GR900-rgb: 165, 14, 14;
    --GR500-dark-rgb: 230, 106, 94;
    --GR600-dark-rgb: 211, 59, 48;
    --GR800-dark-rgb: 180, 27, 26;
    --dark-mode-shadow: 0 1px 3px 0 rgba(0, 0, 0, .3), 0 4px 8px 3px rgba(0, 0, 0, .15);
}
