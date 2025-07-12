# TodoList Application

A full-stack todo list application built with React and Node.js to help you manage your daily tasks effectively.

## 🎯 Overview

This TodoList application consists of:
- **Backend**: Node.js with Express.js and MongoDB
- **Frontend**: React with Vite for fast development
- **Database**: MongoDB for data persistence

## ✨ Features

- ✅ **Add tasks**: Create new tasks for your todo list
- 🔄 **Toggle completion**: Mark tasks as complete or incomplete
- 🗑️ **Delete tasks**: Remove tasks that are no longer needed
- 📋 **View all tasks**: Display all your tasks in an organized list
- 🔄 **Real-time updates**: Changes are reflected immediately

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally)
- npm or yarn package manager

### Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd TodoList
   ```

2. **Backend Setup**:
   ```bash
   cd backend
   npm install
   npm start
   ```
   The backend server will start on `http://localhost:3000`

3. **Frontend Setup** (in a new terminal):
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   The frontend will start on `http://localhost:5173`

4. **Database Setup**:
   - Ensure MongoDB is running locally on `mongodb://127.0.0.1:27017/todolist`
   - The database and collections will be created automatically

## 🛠️ Technology Stack

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **CORS**: Cross-Origin Resource Sharing
- **Nodemon**: Development tool for auto-restarting

### Frontend
- **React**: JavaScript library for building user interfaces
- **Vite**: Fast build tool and development server
- **Axios**: HTTP client for API requests
- **React Icons**: Icon library
- **ESLint**: Code linting tool

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/get` | Retrieve all tasks |
| POST | `/add` | Add a new task |
| PUT | `/update/:id` | Toggle task completion status |
| DELETE | `/delete/:id` | Delete a specific task |

## 📁 Project Structure

```
TodoList/
├── backend/
│   ├── Models/
│   │   └── Todo.js          # MongoDB schema
│   ├── index.js             # Express server
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── App.jsx         # Main App component
│   │   └── main.jsx        # Entry point
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🔧 Development

### Backend Development
- The server uses **nodemon** for automatic restarts during development
- MongoDB connection string: `mongodb://127.0.0.1:27017/todolist`
- Default port: `3000`

### Frontend Development
- **Hot Module Replacement (HMR)** enabled with Vite
- **ESLint** configured for code quality
- Run linter: `npm run lint`
- Build for production: `npm run build`

## 🚦 Usage

1. **Start both servers** (backend and frontend)
2. **Open your browser** to `http://localhost:5173`
3. **Add tasks** using the input field
4. **Click on tasks** to toggle completion
5. **Delete tasks** using the delete button

### Common Issues

1. **MongoDB Connection Error**:
   - Ensure MongoDB is running locally
   - Check the connection string in `backend/index.js`

2. **Port Already in Use**:
   - Backend: Change port in `backend/index.js`
   - Frontend: Vite will automatically suggest an alternative port

3. **CORS Issues**:
   - CORS is already configured in the backend
   - Ensure frontend is making requests to the correct backend URL

---

**Happy Task Managing! 🎉**
