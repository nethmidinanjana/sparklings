# ✨ Sparkling Animation with React & Styled-Components

This repository contains a sparkling animation effect built using **React** and **styled-components**. The animation dynamically generates sparkles that appear and disappear with a smooth scaling and spinning effect, inspired by the tutorial from [Josh W. Comeau](https://www.joshwcomeau.com/).

## 🚀 Features

- **Dynamic Sparkles**: Randomly generated sparkles that animate across the screen.
- **Customizable Colors & Sizes**: Easily configurable sparkle size and color.
- **Accessible Motion Preferences**: Respects user motion preferences for reduced animations.
- **Reusable Component**: Easily integrate into any React project.

## 🛠️ Technologies Used

- **React**
- **styled-components**
- **TypeScript** (if applicable)

## 📂 Project Structure

    ```bash
    . ├── src
    │ ├── components
    │ │ └── Sparkles.tsx # Main Sparkles component
    │ └── hooks
    │ ├── usePrefersReducedMotion.ts # Hook to detect motion preference
    │ └── useRandomInterval.ts # Hook for random interval generation
    └── README.md
    ```

## 📝 Usage

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/sparkling-animation.git
   cd sparkling-animation

   ```

   ## 🚀 Getting Started

2. **Clone the Repository:**

   ```bash

   npm install

   # or

   yarn install

   ```

3. **Run the Project:**

   ```bash

    npm run dev
    pnpm dev

    # or

    yarn dev

   ```

4. **Import and Use the Sparkles Component:**

   ```bash

    import Sparkles from './path/to/Sparkles';

    function App() {
        return (
            <div>
                <Sparkles color="#FF4800">
                    <h1>Shiny Title</h1>
                </Sparkles>
            </div>
        );
    }

    export default App;

   ```

🎨 Customization
Color: Pass a custom color to the Sparkles component via the color prop.
Number of Sparkles: Adjust the number of initial sparkles by modifying the range parameter in the Sparkles.tsx file.
📖 Credits
This animation is based on the tutorial by Josh W. Comeau with personal modifications for enhanced flexibility and usability.
