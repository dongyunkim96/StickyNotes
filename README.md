<div align="center">

<h1><strong>StickyTasks</strong> – Post-it Style Task Manager</h1>

<h2>
  <a href="https://sticky-notes-nine-sandy.vercel.app/">Live Project Link</a>
</h2>

<div align="center">
  <a href="https://sticky-notes-nine-sandy.vercel.app/">
  </a>
</div>

<br/>

<p>
Welcome to <strong>StickyTasks</strong> – your beautiful, modern, and fully responsive task manager inspired by pastel post-it notes!<br/>
Built with <strong>React</strong>, <strong>TypeScript</strong>, <strong>Vite</strong>, <strong>Styled-Components</strong>, and <strong>Auth0</strong>.<br/>
Manage, organize, and track your daily to-dos with drag-and-drop sticky notes, due dates, status updates, and a delightfully simple interface.<br/>
Accessible anywhere, on any device.
</p>

</div>

---

## Features 📋

⚡️ Auth0 login/logout for privacy and security  
⚡️ Dashboard displays all your tasks as beautiful, colorful sticky notes  
⚡️ Add, edit, delete, and view tasks with full CRUD support  
⚡️ Set and track due dates for each task  
⚡️ Mark tasks as To Do, In Progress, or Done  
⚡️ Cancel button for easy navigation out of any form  
⚡️ Home button to return to dashboard from any page  
⚡️ Smooth, responsive design for desktop, tablet, and mobile  
⚡️ Pastel post-it color themes and easy theme customization  
⚡️ 100% type-safe: powered by TypeScript  
⚡️ Built-in validation for forms and error handling

---

## Pages 📚

✔️ Dashboard (sticky notes grid)  
✔️ Add/Edit Task  
✔️ Task Details  
✔️ Login

---

## Frameworks & Libraries used 📚

`React` `Vite` `TypeScript` `Styled-Components` `Auth0`  
`React Context API` `React Router v6`

---

## File/Folder Structure

```txt
src/
├── App.tsx
├── main.tsx
├── styled.d.ts
├── theme.ts
├── types/
│   ├── task.ts
│   └── user.ts
├── context/
│   ├── AuthContext.tsx
│   └── TaskContext.tsx
├── hooks/
│   └── useTasks.ts
├── pages/
│   ├── Dashboard.tsx
│   ├── TaskDetailsPage.tsx
│   ├── TaskFormPage.tsx
│   └── Login.tsx
├── components/
│   ├── TaskList/
│   │   └── TaskList.tsx
│   ├── TaskForm/
│   │   └── TaskForm.tsx
│   ├── TaskDetails/
│   │   └── TaskDetails.tsx
│   └── UI/
│       ├── Button.tsx
│       └── AppHeader.tsx
└── utils/
    └── validation.ts

## Getting Started 🚀

1. **Clone the repository**
    ```bash
    git clone https://github.com/your-username/stickytasks.git
    cd stickytasks
    ```

2. **Install the dependencies**
    ```bash
    npm install
    ```

3. **Configure Auth0**
    - Go to the [Auth0 dashboard](https://manage.auth0.com/), create a SPA application.
    - In the Application's Settings, set:
        - Allowed Callback URLs: `http://localhost:5173`
        - Allowed Logout URLs: `http://localhost:5173`
        - Allowed Web Origins: `http://localhost:5173`
    - Copy your domain and clientId.
    - In `src/context/AuthContext.tsx`, replace:
        ```ts
        domain="YOUR_AUTH0_DOMAIN"
        clientId="YOUR_AUTH0_CLIENTID"
        ```
        with your Auth0 values.

4. **Run the app**
    ```bash
    npm run dev
    ```
    Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Usage 🧭

- **Login** with Auth0 to access your sticky note dashboard.
- **Add tasks** using the "+ New Sticky" button.
- **Edit or delete** tasks anytime—each sticky supports a title, description, status, and due date.
- **Click a sticky** to view its details, status, and deadline.
- **Cancel** forms at any time to go back to dashboard.
- **Home button** (🏠) in the header helps you navigate.
- **Works on any device** with a responsive, touch-friendly UI.

---

## Customization 🎨

- Change colors in `src/theme.ts` for your own pastel palette
- Edit the logo/header in `src/components/UI/AppHeader.tsx`
- Want a backend? Replace the React Context logic with your own API calls

---

⭐ Star this repo on GitHub — it helps!
