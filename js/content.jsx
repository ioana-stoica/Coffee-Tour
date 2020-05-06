import React from 'react';
import ReactDOM from 'react-dom';
import MiddleSection from "./middleSection.jsx";
import Filter from "./filter.jsx";

class Content extends React.Component {

    state = {
        data: false,
        id: '',
        objCoffeeShop: {},
        markers: [],
        map: '',
        roasteryFilter: false,
        foodFilter: false,
        petFilter: false
    };
//http://localhost:3000/coffeeShops
    componentDidMount() {
        fetch('https://coffeeshops-dcd80.firebaseio.com/.json').then(resp => {
            return resp.json();
        }).then(resp => {
            this.setState({data: resp.coffeeShops}, () => {
                for (let i = 0; i < this.state.data.length; i++) {
                    this.addMarkerToMap(mymap, this.state.data[i]);
                }

                this.setState({map: mymap});

                var self = this;
                mymap.on('popupopen', (e) =>  {
                    console.log("you clicked?");
                    var clickedCoffeeShopId = e.target._popup._source.options.id;
                    var clickedCoffeeShop = this.state.data[clickedCoffeeShopId - 1];
                    console.log(clickedCoffeeShopId);
                    console.log(clickedCoffeeShop.name);
                    console.log(clickedCoffeeShop.description);
                    self.setState({
                        id: clickedCoffeeShopId,
                        objCoffeeShop: clickedCoffeeShop
                    });
                    console.log(self.state.id);
                    console.log(self.state.objCoffeeShop);
                    // window.location.href="#details"
                    // var url = location.href;               //Save down the URL without hash.
                    // location.href = "#details";var url = location.href;               //Save down the URL without hash.
                    // location.href = "#details";
                });

            });
            console.log(this.state.data);
        });


        var mymap = L.map('map').setView([51.505, -0.09], 13);

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaW9hbmF0cmFuZGFmaXIiLCJhIjoiY2s2cGJzN3cyMG9kNDNrcDlmNmc5YXpxNCJ9.x4LRclEnrRJxtJvNDvAzqw', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'your.mapbox.access.token'
        }).addTo(mymap);
        mymap.panTo([44.437100, 26.104707]);
    }

    clearMap = () => {
        for (let j = 0; j < this.state.markers.length; j++) {
            this.state.map.removeLayer(this.state.markers[j]);
        }
    };

    addMarkerToMap = (mymap, coffeshop) => {
        let lat = coffeshop.latitude;
        let long = coffeshop.longitude;
        let nameC = coffeshop.name;
        let id = coffeshop.id;
        var marker = L.marker([lat, long], {id: id}).addTo(mymap);
        this.state.markers.push(marker);
        marker.bindPopup(`<b>${nameC}</b><br>Great coffee!`);
    };


    getFilteredArray = (roasteryFilter, foodFilter, petFilter) => {
        var filteredArray = this.state.data;
        if(roasteryFilter === true) {
            console.log("Filtru roasteryFilter");
            filteredArray = filteredArray.filter(data => data.hasRoastery === roasteryFilter);
        }
        if(foodFilter === true) {
            console.log("Filtru foodFilter");
            filteredArray = filteredArray.filter(data => data.servesFood === foodFilter);
        }
        if(petFilter === true) {
            console.log("Filtru petFilter");
            filteredArray = filteredArray.filter(data => data.petFriendly === petFilter);
        }
        return filteredArray;
    };

    handleButton1 = () => {
        this.clearMap();

        var filteredArray = this.getFilteredArray(!this.state.roasteryFilter, this.state.foodFilter, this.state.petFilter);
        for (let i = 0; i < filteredArray.length; i++) {
            this.addMarkerToMap(this.state.map, filteredArray[i]);
        }
        this.setState({roasteryFilter: !this.state.roasteryFilter});
    };


    handleButton2 = () => {
        this.clearMap();

        var filteredArray = this.getFilteredArray(this.state.roasteryFilter, !this.state.foodFilter, this.state.petFilter);
        for (let i = 0; i < filteredArray.length; i++) {
            this.addMarkerToMap(this.state.map, filteredArray[i]);
        }
        this.setState({foodFilter: !this.state.foodFilter});
    };

    handleButton3 = () => {
        this.clearMap();

        var filteredArray = this.getFilteredArray(this.state.roasteryFilter, this.state.foodFilter, !this.state.petFilter);
        for (let i = 0; i < filteredArray.length; i++) {
            this.addMarkerToMap(this.state.map, filteredArray[i]);
        }
        this.setState({petFilter: !this.state.petFilter});
    };

    render() {
        return (
            <div id="content">
                <Filter handleButton1={this.handleButton1} handleButton2={this.handleButton2} handleButton3={this.handleButton3} coffeeShop={this.state.objCoffeeShop} />
                <MiddleSection id={this.state.id} coffeeShop={this.state.objCoffeeShop}/>
            </div>
        )
    }
}

export default Content;