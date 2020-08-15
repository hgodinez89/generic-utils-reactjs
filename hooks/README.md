## How do they work?

Here is a brief description of how the following generic hooks work:

- [How do they work?](#how-do-they-work)
- [useCounter](#usecounter)
- [useFetch](#usefetch)
- [useForm](#useform)

## useCounter

You can use this hook, when you need to have a simple counter in your application.

*Arguments*

| # |      Name      |  Datatype   |  Default Value  |  Required  | 
| - | -------------- | ----------- | --------------- | ---------- |
| 1 | initialValue   | Number      | 0               | No         |

*Usage example*

```
    const { counter, increment, decrement, reset } = useCounter(6);
```

## useFetch

You can use this hook, when you need to get data from any API in your application.

*Arguments*

| # |      Name      |  Datatype   |  Default Value  |  Required  | 
| - | -------------- | ----------- | --------------- | ---------- |
| 1 | url            | String      |                 | Yes        |

*Usage example*

```
    const url = 'https://api.github.com/users/githubUser/repos';
    const { data, loading, error } = useFetch(url);
```

## useForm

You can use this hook, when you need to manage the state of any simple form in your application.

*Arguments*

| # |      Name      |  Datatype   |  Default Value  |  Required  | 
| - | -------------- | ----------- | --------------- | ---------- |
| 1 | initialState   | JSON Object | {}              | Yes        |

*Usage example*

```
    const initialState = {
        name: '',
        age: 0,
        email: ''
    };
    const [ formValues, handledInputChange, reset ] = useForm(initialState);
```