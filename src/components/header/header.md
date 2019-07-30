Header component

Renders  a basic header with navigation links and title of the app

```jsx

return (
    <header>
      <h1>Game Time Analytics</h1>
      <nav>
          <span>
            <a href="/">Home</a>
          </span>
            <span>
              <a href="/playerStats">Player Stats</a>
            </span>
            <span>
              <a href="/admin">Admin</a>
            </span>
          <span>
            <a href="/aboutUs">About Us</a>
          </span>
      </nav>
    </header>
  );
```