# Pokedex

[backend repo](https://github.com/turingschool-examples/poke-api)

## Iteration 0

First thing we want to do is fetch some info for us to display. **Thunks are not required**
You are going to want to grab all the pokemon data and populate a redux store. You should also have `isLoading` and `error` properties in your store. The data can be found at this API endpoint: `get /pokemon`.

## Iteration 1

Lets work on the visual layer!

Once you've populated the redux store with all the pokemon data you are going to want to display them as Cards. While we wait for the data please give your app a loading gif. Also, if there is an error fetching the data, please let the user know.

Display the following for each pokemon:
`name`, `weight`, and display one of the pokemon `sprites`  

## Iteration 2

Now it's time to test! We just need to test our actions, reducers, mapStateToProps and mapDispatchToProps. You may reference the docs and the Testing Redux lesson, but may not look at past projects.

** You are not required to test your async code (including thunks)
