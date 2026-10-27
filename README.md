# Eye in the Air, Hand in the Water

Project page for "Eye in the Air, Hand in the Water: A Plug-and-Play World
Model with Analytic Priors for Cross-Medium Manipulation." The page is adapted
from the Nerfies website template.

## Edit the page

- Main content: `index.html`
- Custom styles: `static/css/index.css`
- Custom scripts: `static/js/index.js`
- Favicon: `static/images/favicon.svg`
- Project overview figure: `static/images/project-overview.png`
- Method figure (Fig. 2): `static/images/fig2-method.png`

## Add your videos

No original Nerfies videos are included. Add your own MP4 files to `static/videos/`.

The current page expects:

- `static/videos/teaser.mp4`: real-robot raw-wet failure versus world-model success
- `static/videos/real-robot-rollout.mp4`: ACT and pi0.5 real-robot rollouts for
  grasping, placing, and stacking

You can also rename the paths in `index.html` if your file names are different.

## Preview

Open `index.html` directly in a browser, or run a local static server from this folder:

```bash
python3 -m http.server 8765
```

Then visit `http://127.0.0.1:8765/`.

## Credit

The original template comes from <https://github.com/nerfies/nerfies.github.io>.
