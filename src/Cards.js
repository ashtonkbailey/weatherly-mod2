import React, { Component } from 'react';

import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import WelcomeCard from './WelcomeCard';
import TwentyFourHour from './24Hour';

export default class Cards extends Component {
  render() {
    const cardsArray = [  <WelcomeCard 
                            fullCityList={this.props.fullCityList}
                            newTrie={this.props.newTrie}
                            parseUserEntry={this.props.parseUserEntry}
                            setCard={this.props.setCard}
                          />,
                          <CurrentWeather 
                            localStats={this.props.localStats}
                            localForecast={this.props.localForecast}
                          />,
                          <SevenHour  
                            hourlyForecast={this.props.hourlyForecast}
                          />,
                          <TenDay tenDay={this.props.tenDay}/>,
                          <TwentyFourHour
                            hourlyForecast={this.props.hourlyForecast}  
                          />
                        ]

    return (
      <section className='card-holder'>
      {
        cardsArray.map((card, i) => {
          return (
            <div className="card" id="card" style={this.props.cardStyle} key={i}>
                {card}
              <a ><img alt='' src={card.url} /></a>
            </div>
          )
        })
      }
      </section>
    )
  }
}
