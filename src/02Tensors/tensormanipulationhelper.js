import * as tf from '@tensorflow/tfjs'
export const users = ['Gant', 'Todd', 'Jed', 'Justin']


export const bands=[
    "Nirvana",
    "Offspring",
    "Eskorbuto",
    "R.I.P",
    "Backstreet Boys",
    "Beyoncé",
    "James Brown",
]

export const features = [
    'Grunge',
    'Rock',
    'Pop',
    'Funk',
    'R&B',
    'Punk'
]

export const userVotes= tf.tensor([
    [10,2,5,8,2,1,8],
    [9,4,0,0,7,9,3],
    [7,4,8,9,4,3,2],
    [10,3,6,8,3,2,4],
])

export const band_feats = tf.tensor([
    [1,1,0,0,0,1],
    [1,1,0,0,0,1],
    [0,1,0,0,0,1],
    [0,1,0,0,0,1],
    [0,0,1,0,0,0],
    [0,0,0,0,1,0],
    [0,0,0,1,1,0]
])

//its a 2D tensor that identifies the genres that match each given band

const user_feats = tf.matMul(userVotes, band_feats)

const top_user_features = tf.topk(user_feats, features.length)




const top_genres= top_user_features.indices.arraySync()


export const Exercise = String.raw`

export const users = ['Gant', 'Todd', 'Jed', 'Justin']

export const bands=[
    "Nirvana",
    "Offspring",
    "Eskorbuto",
    "R.I.P",
    "Backstreet Boys",
    "Beyoncé",
    "James Brown",
]

export const features = [
    'Grunge',
    'Rock',
    'Pop',
    'Funk',
    'R&B',
    'Punk'
]

export const userVotes= tf.tensor([
    [10,2,5,8,2,1,8],
    [9,4,0,0,7,9,3],
    [7,4,8,9,4,3,2],
    [10,3,6,8,3,2,4],
])

export const band_feats = tf.tensor([
    [1,1,0,0,0,1],
    [1,1,0,0,0,1],
    [0,1,0,0,0,1],
    [0,1,0,0,0,1],
    [0,0,1,0,0,0],
    [0,0,0,0,1,0],
    [0,0,0,1,1,0]
])

//band_feats is a 2D tensor that identifies the genres that match each given band


const user_feats = tf.matMul(userVotes, band_feats)

user_feats.print()

The result is:
[[12, 25, 2, 8, 9 , 25],
[13, 13, 7, 3, 12, 13],
[11, 28, 4, 2, 5 , 28],
[13, 27, 3, 4, 6 , 27]]

This tensor shows the values of the features (in this case, genres) of each user. 

const top_user_features = tf.topk(user_feats, features.length)

//Back to Javascript

const top_genres= top_user_features.indices.arraySync()

//print the results

users.map((u,i)=>{
    const ranked_categories= top_genres[i].map(v =>features[v])
    console.log(u, ranked_categories)
})


This results:
 Gant[
    "Rock",
    "Punk",
    "Grunge",
    "R&B",
    "Funk",
    "Pop"
 ],
 Ted[etc]

`
