# Hugo Personal Site <!-- omit in toc -->

Hugo templates for a personal site tailored to developers and tech enthusiasts.

## Setup

- Clone this project and enter project directory.

```bash
git clone https://github.com/chrisx8/hugo-personal-site.git
cd hugo-personal-site
```

- Create your config file.

```bash
cp config.example.toml config.toml
```

- Edit `config.toml` as needed.
- Generate your own icons [here](https://realfavicongenerator.net). Download the generated Favicon package.
- Unzip the downloaded package to `static/img/`, replacing ALL existing placeholder icon files.
- Upload a banner image for `og:image` (`1280*640`, in `.png` format) to `static/img/`, replacing the existing `og-image.png`

## Build

- Simply run Hugo to build your static site

```bash
# omit '--minify' if you don't want minified HTML output
hugo --minify
```

- Your site is located at `public/`. Serve it with a web server (like Nginx) or static site hosting service (like GitHub Pages).
