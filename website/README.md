# Project Title

A brief description of the project and its purpose.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Layouts](#layouts)
- [Pages](#pages)
- [Styles](#styles)
- [License](#license)

## Installation

To install the project, clone the repository and run the following command:

```
npm install
```

## Usage

To start the development server, use the following command:

```
npm run dev
```

Visit `http://localhost:3000` in your browser to view the project.

## Components

- **SponsorCard**: A component that displays sponsor information, including name, logo, description, website, and tier. The card design maintains a rectangular shape with a 5:4 aspect ratio and applies color themes based on the sponsor's tier.

## Layouts

- **BottomLayout**: A layout wrapper for the bottom section of pages.
- **PageLayout**: A layout wrapper for the main structure of pages, including headers and footers.
- **TopLayout**: A layout wrapper for the top section of pages.

## Pages

- **Sponsor Page**: The main page for sponsors, which imports the SponsorCard component to display a list of sponsors.

## Styles

- **Global Styles**: Consistent design across all components and pages is ensured through global styles defined in `src/styles/global.css`.

## License

This project is licensed under the MIT License.