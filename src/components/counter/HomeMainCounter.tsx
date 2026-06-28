import AnimatedCounter from './AnimatedCounter';
import React from 'react';

const counter_data = [
  {
    id: 1,
    title: "Happy Clients &\nRepeat Customers",
    count: 95,
    suffix: '%',
    dataDelay:".3"
  },
  {
    id: 2,
    title: "Years of Industry\nExperience",
    count: 25,
    suffix: '+',
    dataDelay:".5"
  },
];

const HomeMainCounter = () => {
  return (
    <div className="row">
      {counter_data.map((item) => (
        <div className="col-md-6 col-sm-6" key={item.id}>
          <div className="tp-about-funcact-item tp_fade_anim mb-30" data-delay={item.dataDelay}>
              <span><AnimatedCounter min={0} max={item.count} />{item.suffix}</span>
            <p>
              {item.title.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeMainCounter;
