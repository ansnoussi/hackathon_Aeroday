import React, { Component } from 'react';
import {Text} from '../components';
import Player from '../components/Player';

export default class Rewards extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    static navigationOptions = {
        header: null,
    };
  
  render() {

    const TRACKS = [
        {
          title: 'ريحة لبلاد',
          artist: 'محمد الجموسي',
          albumArtUrl: "https://api.ournia.co/data/35/2447/profile/large/mohamed-el-jamoussi-2447.png",
          audioUrl: 'http://dl.fazmusics.in/Ali/music/aban/hot%20100%20.7%20nov%202015(128)/Twenty%20One%20Pilots%20-%20Stressed%20Out.mp37',
        },
        {
          title: 'Love Yourself',
          artist: 'Justin Bieber',
          albumArtUrl: "http://arrestedmotion.com/wp-content/uploads/2015/10/JB_Purpose-digital-deluxe-album-cover_lr.jpg",
          audioUrl: 'http://srv2.dnupload.com/Music/Album/Justin%20Bieber%20-%20Purpose%20(Deluxe%20Version)%20(320)/Justin%20Bieber%20-%20Purpose%20(Deluxe%20Version)%20128/05%20Love%20Yourself.mp3',
        },
        {
          title: 'Hotline Bling',
          artist: 'Drake',
          albumArtUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png',
          audioUrl: 'http://dl2.shirazsong.org/dl/music/94-10/CD%201%20-%20Best%20of%202015%20-%20Top%20Downloads/03.%20Drake%20-%20Hotline%20Bling%20.mp3',
        },
      ];

    return (
        <Player tracks={TRACKS} />
    )
  }
}
