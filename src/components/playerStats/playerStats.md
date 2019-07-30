PlayerStats component

Allows the user to search player by name to get their stats (passing yards, touchdowns and interceptions)


```jsx
return (
      <React.Fragment>
        <h1>Playerstats!</h1>
            <form>
            <input
              placeholder="playerName"
              name="playerName"
            />
            <input type="submit" value="playerName" />
          </form>
          
      </React.Fragment>
  );
```