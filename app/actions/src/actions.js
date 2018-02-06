import fetch from 'isomorphic-fetch'





export const Buy = (buy_type, buy_sum, cost_sum) => ({
  type: "BUY",
  buy_type: buy_type,
  buy_sum: buy_sum,
  cost_sum: cost_sum
})

export const Sell = (buy_type, buy_sum, cost_sum) => ({
  type: "SELL",
  buy_type: buy_type,
  buy_sum: buy_sum,
  cost_sum: cost_sum
})

export const BuyForTable = (buy_sum, cost_sum, symbol) => ({
  type: "BUYTABLE",
  buy_sum: buy_sum,
  cost_sum: cost_sum,
  symbol: symbol
})

export const SellForTable = (buy_sum, cost_sum, symbol) => ({
  type: "SELLTABLE",
  buy_sum: buy_sum,
  cost_sum: cost_sum,
  symbol: symbol
})





export const upData = value => ({
  type: "GET_DATA",
  payload: value
});






export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export function selectSubreddit(){
  return {
    type: SELECT_SUBREDDIT

  }
}

export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export function invalidateSubreddit(){
  return {
    type: INVALIDATE_SUBREDDIT

  }
}

export const REQUEST_POSTS = 'REQUEST_POSTS'
export function requestPosts(){
  return {
    type: REQUEST_POSTS

  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export function receivePosts(json) {
  return {
    type: RECEIVE_POSTS,
    posts: json,
    receivedAt: Date.now(),

  }
}


export function fetchPosts() {
  return function (dispatch) {
    dispatch(requestPosts())

    return fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10%20`)
      .then(response => response.json())
      .then(json =>
        dispatch(receivePosts(json))
      )
  }
}
