import Link from 'next/link'
import { database } from '../utils/firebase'

export default function projects({ resData }){
    return(
        <div id="projectsContainer" className="flex flex-row flex-wrap justify-evenly items-center w-full h-auto">
            {resData.map((val, index) => (
                <div className="bg-gray-200 h-4/6 w-2/6 m-2 rounded text-gray-900 duration-150 hover:bg-gray-800 hover:text-gray-200" key={val.name}>
                    <a className="flex flex-col p-4 h-full w-full" href={val.link} target="_blank">
                        <div className="text-lg">{val.name}</div>
                        <div className="text-sm">{val.description}</div>
                        <div className="text-sm mt-2 text-gray-500">{val.tech}</div>
                    </a>
                </div>
            ))}
        </div>
    )
}

export async function getStaticProps(){
    var resData = [];
    database.ref('/projects/').on('value', (snapshot) => {
      if(snapshot.exists()){
        var data = snapshot.val();
        var keys = Object.keys(data);
        for(var i = 0; i < keys.length; i++) {
          var id = keys[i];
          var obj = data[id];
  
          resData.push({
            id: id,
            name: obj.name,
            link: obj.link,
            imageLink: obj.imageLink,
            description: obj.description,
            tech: obj.tech
          });
        }
      }
    });
  
    return {
      props: {
        resData
      },
    }
  }