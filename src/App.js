
import CreativeSpeakers from './desigen-system/components/CreativeSpeakers';
import dataSpeakers from './desigen-system/components/CreativeSpeakers/dataCreativeSpeakers';
import OverView from './desigen-system/components/overView';
import dataOverView from './desigen-system/components/overView/dataOverView';
import img1 from './shared/asses/1.jpg'


function App() {
  return (
    <div className="App">

      <div className='overView' style={{display:'flex', alignItems: 'center', justifyContent:'center'}}>
         {
        dataOverView.map((e) => {
          return (
            <div className='box'>
              <OverView icon={e.icon} title={e.title} description={e.description} key={e.id} />
            </div>
          )
        })
      }
      </div>

      <div className="speakers" style={{display:'flex', gap: '20px'}}>
        {
          dataSpeakers.map((e) => {
            return (
              <CreativeSpeakers image={e.image} name={e.name} job={e.job} key={e.id} />
            )
          })
        }
      </div>
      
    </div>
  );
}

export default App;
