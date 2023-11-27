# Frontend Assignment - Kanban Board Application using ReactJS

This project is a part of a college campus hiring assignment where students are tasked to create an interactive Kanban board application using ReactJS. The primary goal is to interact with the provided API from [https://api.quicksell.co/v1/internal/frontend-assignment](https://api.quicksell.co/v1/internal/frontend-assignment).

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/rohitsingh2901/QuickSell-KanbanBoard.git
```

2. Navigate to the project directory:
```bash
cd QuickSell-KanbanBoard
```

3. Install dependencies:
```bash
npm install
```

4. Start the application:
```bash
npm start
```


## Design Overview

### Display State

- **Grouping by Priority is Selected**:
![image](https://github.com/rohitsingh2901/QuickSell-KanbanBoard/assets/80673974/dd5d2945-4929-41b3-8036-39c143a211d4)

- **Grouping by Status is Selected**:
![image](https://github.com/rohitsingh2901/QuickSell-KanbanBoard/assets/80673974/81a99361-942f-46c1-b96c-4e94d1e4369b)


- **Grouping by User is Selected**:
![image](https://github.com/rohitsingh2901/QuickSell-KanbanBoard/assets/80673974/fb1834f8-3e6f-4cf0-954b-d5b9e33c9b0c)


### Card Design


## Functionality

The application allows users to perform the following actions:

1. **Grouping Options**:
   - **By Status**: Groups tickets based on their current status.
   - **By User**: Arranges tickets according to the assigned user.
   - **By Priority**: Groups tickets based on their priority level.

2. **Sorting Options**:
   - **Priority**: Arranges tickets in descending order of priority.
   - **Title**: Sorts tickets in ascending order based on their title.
  

## Folder Structure

```
src/
└── components/
    ├── filter/
    │   ├── DisplayOption/
    │   │   ├── Display.js
    │   │   └── Display.css
    │   ├── SortOption/
    │   │   ├── SortOption.js
    │   │   └── SortOption.css
    │   ├── Options.js
    │   └── Options.css
    └── KanbanBoard/
        ├── Options/
        │   ├── ByPriority/
        │   │   ├── ByPriority.js
        │   │   └── ByPriority.css
        │   ├── ByStatus/
        │   │   ├── ByStatus.js
        │   │   ├── ByStatus.css
        │   │   └── UserIcon.js
        │   └── ByUser/
        │       ├── ByUser.js
        │       └── ByUser.css
        ├── KanbanBoard.js
        └── KanbanBoard.css
```

## Requirements

- React.js for front-end development.
- Pure CSS code only, without using any CSS libraries (e.g., Bootstrap, Tailwind).
- Font Awesome. The internet's icon library + toolkit. 

## API Endpoint

API Endpoint: https://api.quicksell.co/v1/internal/frontend-assignment

## Priority Levels

- **Urgent (Priority level 4)**
- **High (Priority level 3)**
- **Medium (Priority level 2)**
- **Low (Priority level 1)**
- **No Priority (Priority level 0)**


## Author

Rohit Singh
singhrohitrrr@gmail.com

