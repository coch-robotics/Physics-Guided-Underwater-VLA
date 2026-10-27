# Physics-Guided Underwater VLA

**Eye in the Air, Hand in the Water**

A plug-and-play world model for cross-medium robotic manipulation, where cameras observe from above water while robot tools operate underwater. The project addresses the changing visual distortion caused by waves and refraction, helping existing robot policies operate on submerged objects.

## Key Ideas

- **Physics-guided prediction:** Combine analytic wave and refraction priors with learned residual dynamics.
- **Action-aligned observations:** Predict refraction-free RGB views for the scheduled start of action execution.
- **Frozen-policy integration:** Provide observations to ACT, Diffusion Policy, π0.5, and SmolVLA without updating their policy weights.

## Demonstrations

The project includes simulation and real-world evaluations of grasping, placing, and stacking.

- [Project website](https://coch-robotics.github.io/Physics-Guided-Underwater-VLA/)
- [Real-world demonstration](static/videos/real-world-demo.mp4)
- [Simulation demonstration](static/videos/simulation-demo.mp4)

---

The project website is adapted from the [Nerfies template](https://github.com/nerfies/nerfies.github.io).
