import React,{Component} from 'react';
import classes from './App.module.css';
import ProductData from './Utils/ProductData';
import ProductDetails from './Product Details/Productdetails';
import ProductPreview from './Product Preview/ProductPreview';
import Topbar from './Topbar/Topbar';

class App extends Component{
  state={
    productdata:ProductData,
    currentPreviewImagePos:0,
    currentSelectedFeature:0

  }

  onColorOptionClick=(pos)=>{
    const updatedPreviewImage = this.state.productdata.colorOptions[pos].imageUrl;
    this.setState({currentPreviewImagePos:pos});

  }

  onFeatureItemClick=(pos)=>{
    
   this.setState({currentSelectedFeature:pos})


  }

  render()
    {
    return ( //topbar ProductPreview ProductDetails are components
      <div className="App"> 
        <Topbar/> 
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
                <ProductPreview currentPreviewImage={this.state.productdata.colorOptions
                [this.state.currentPreviewImagePos].imageUrl}
                currentSelectedFeature={this.state.currentSelectedFeature} 
                />
          </div>
          <div className={classes.ProductData}>
           <ProductDetails data={this.state.productdata} onColorOptionClick={
           this.onColorOptionClick} 
           currentPreviewImagePos = {this.state.currentPreviewImagePos}
           onFeatureItemClick={this.onFeatureItemClick} 
           currentSelectedFeature={this.state.currentSelectedFeature}/>
          </div>
        </div>
  
        
      </div>
    );

    } 
  
  
}

export default App;
