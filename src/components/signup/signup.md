Sign up component

Allows a user to signup in order to fully utilize the app


```jsx
return(
  <form onSubmit={e => handleSubmit(e, context.login)}>
             <input
               placeholder="username"
               name="username"
             />
             <input
               placeholder="password"
               name="password"
               type="password"
             />
             <input
               placeholder="email"
               name="email"
               type="email"
             />
             <input type="submit" value="login" />
           </form>
)
```