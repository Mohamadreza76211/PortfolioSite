const Pricing = () => {
  return (
    <div className="section pricing" id="section-pricing">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Pricing Table</div>
        </div>
        {/* pricing items */}
        <div className="pricing-items">
          <div className="pricing-col">
            <div className="pricing-item content-box">
              <div className="icon">
                <span className="fas fa-star" />
              </div>
              <div className="name">Basic</div>
              <div className="amount">
                <span className="number">
                  <span className="dollar">$</span>
                  <span>39</span>
                  <span className="period">hour</span>
                </span>
              </div>
              <div className="feature-list">
                <ul>
                  <li>Web Development</li>
                  <li>Advetising</li>
                  <li>Game Development</li>
                  <li className="disable">Music Writing</li>
                  <li className="disable">Photography</li>
                </ul>
              </div>
              <div className="bts">
                <a href="#" className="btn hover-animated">
                  <span className="circle" />
                  <span className="lnk">Buy Now</span>
                </a>
              </div>
            </div>
          </div>
          <div className="pricing-col">
            <div className="pricing-item content-box">
              <div className="icon">
                <span className="fas fa-rocket" />
              </div>
              <div className="name">Premium</div>
              <div className="amount">
                <span className="number">
                  <span className="dollar">$</span>
                  <span>59</span>
                  <span className="period">hour</span>
                </span>
              </div>
              <div className="feature-list">
                <ul>
                  <li>Web Development</li>
                  <li>Advetising</li>
                  <li>Game Development</li>
                  <li>Music Writing</li>
                  <li>
                    Photography <strong>new</strong>
                  </li>
                </ul>
              </div>
              <div className="bts">
                <a href="#" className="btn hover-animated">
                  <span className="circle" />
                  <span className="lnk">Buy Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
