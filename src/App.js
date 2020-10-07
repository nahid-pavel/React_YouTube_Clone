import React,{useState,useEffect}from 'react';
import {Grid} from '@material-ui/core';
import youtube from './api/youtube';
import { SearchBar, VideoDetails,VideoList } from './components';


const  App=() =>{

  const [videos,setVideos] = useState([]);
  const [selectedVideo,setSelectedVideo] =useState(null);

  useEffect(() => {
    
      searchHandler('javascript tutorial')
    
  }, [])

  const searchHandler= async (text)=>{
    console.log(text)  
    try{
        const response = await youtube.get('search',{
        params:{
          part:'snippet',
          maxResults:5,
          key:'AIzaSyBzbQ5EUbjK9L5ylgLo4hdybhvgMRqHc3U',
          q: text
         }});

        console.log(response.data.items)
         
        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0])
        
    }catch(err){
      console.log(err)
    }
        
  }
  const onVideoSelect =(id)=>{
      const selectedVideo =videos.find(video=>video.id.videoId === id );
      setSelectedVideo(selectedVideo);
  }

  return (
    <Grid justify-content="center" container spacing={10}>
       <Grid item xs={12}>
          <Grid container spacing={10}>
              <Grid item xs={12}>
                  <SearchBar  searchHandler={searchHandler}/>
              </Grid>
              <Grid item xs={8}>
                  <VideoDetails video={selectedVideo} />
              </Grid>
              <Grid item xs={4}>
                  <VideoList videos={videos} onVideoSelect={onVideoSelect}/>
              </Grid>
          </Grid>

       </Grid>

    </Grid>
  )
}

export default App;

