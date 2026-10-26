# Exemplar XBlocks

A collection of related XBlocks.

**These are quick and dirty blocks intended to be replaced by a planned upcoming template block.**

- **Card Carousel XBlock**: an XBlock that can present a list of cards in a Carousel. The cards support multiple layouts for presenting the content.
- **Card Grid XBlock**: an XBlock that renders a grid of cards.
- **Cover XBlock**: an aesthetically pleasing block intended for use as a section introduction.
- **External Resources XBlock**: an XBlock that lists curated external resources (type, publisher and expected time) that learners can mark as read.
- **Ideas Overview XBlock**: an XBlock that renders a grid of dot-point ideas.
- **Keypoint XBlock:** a sleek looking glossary xblock, which helps to list down keypoint and defination.
- **Two Column XBlock** an aesthetically pleasing block intended to display engaging static HTML content in two columns.
- **Unfolding Scenario XBlock**: an interactive XBlock providing multi-step, decision-based practice activities.

## Installation

You can add this block to your requirements in your [Tutor](https://docs.tutor.edly.io/) installation's `config.yml` file:

```yaml
OPENEDX_EXTRA_PIP_REQUIREMENTS:
  # ...
  - git+https://gitlab.com/opencraft/dev/exemplar-blocks.git@main
```

Then rebuild your openedx image with:

```bash
tutor images build openedx
```

Or, in a development environment:

```bash
tutor images build openedx-dev
```

Then restart your tutor installation. For example, in a development environment:

```bash
# using tutor dev restart may not reload the container image.
tutor dev stop && tutor dev start
```

### Enabling in your course

Once installed, visit your course in studio and go to 'Settings' -> 'Advanced Settings'.
In the Advanced module list, add the following entries, depending on which blocks you wish to enable:

| XBlock                 | Advanced settings entry |
|------------------------|-------------------------|
| Card Carousel XBlock   | "card_carousel"         |
| Card Grid XBlock       | "card_grid"             |
| Cover XBlock           | "cover"                 |
| External Resources XBlock | "external_resources"  |
| Ideas Overview XBlock  | "ideas_overview"        |
| Keypoint XBlock        | "keypoints"             |
| Two Column XBlock      | "two_column"            |
| Unfolding Scenario XBlock | "unfolding_scenario"  |

See the [Open edX documentation](https://docs.openedx.org/en/latest/educators/how-tos/course_development/exercise_tools/enable_exercises_tools.html#enable-additional-exercises-and-tools) for more information.

## Development Workflow

### Backend

To begin development on the backend (in python):

1. Install [Mise](https://mise.jdx.dev/getting-started.html)
2. Clone this repository: `git clone git@gitlab.com:opencraft/dev/exemplar-blocks.git`
3. Enter the directory: `cd exemplar-blocks`
4. Checkout submodules: `git submodule update --init --recursive`
5. Trust the Mise config (`mise.toml`): `mise trust`
6. Install project dependencies: `mise run install`

This will trust the project for mise, and prepare the Python virtual environment for you.
You may additionally need to install [uv](docs.astral.sh/uv/), though Mise might install it for you.

Next, set up the XBlock sdk:

```bash
mise run init_sdk
```

... and then to start a development server, run:

```bash
mise run dev
```

You can run formatting with:

```bash
mise run format
```

And run the tests with:

```bash
mise run test
```

Coverage is generated for these backend tests.
See `htmlcov/index.html` for a report.

If you make changes to any backend Pydantic types, be sure to regenerate the corresponding frontend Typescript types with:

```bash
# frontend dependencies must also be installed
(cd frontend && pnpm install)

mise run sync-types
```

### Frontend

For frontend dev, see ./frontend/README.md
