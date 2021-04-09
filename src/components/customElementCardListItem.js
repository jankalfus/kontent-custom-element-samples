import React from "react"
import PropTypes from "prop-types"
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

function CustomElementCardListItem({ customElement }) {
  return (
    < div className="card card--lg-2" >
      {
        customElement.core &&
        <div class="tag core tag--orange">CORE INTEGRATION</div>
      }
      <div className="card__content_bottom categories">
        {customElement.categories &&
          customElement.categories.map((c, i) => (
            <span
              key={i}
              className="tag"
              style={{
                margin: "3px",
              }}
            >
              {c}
            </span>
          ))}
      </div>
      <a
        href={customElement.readmeUrl}
        className="card__link-outer"
        target="_blank"
        rel="noopener noreferrer"
        onClick={e => {
          trackCustomEvent({
            category: "CESG",
            action: "Click Detail",
            label: customElement.title
          })
        }}
      ></a>
      <div className="card__content">
        <div className="card__heading  card__heading--small">
          <h3>{customElement.title}</h3>
        </div>
        <div
          className="card__image card__image--no-bg"
          style={{
            padding: "24px 0",
            height: "auto",
          }}
        >
          <img src={customElement.thumbnailUrl.publicURL} alt="Screenshot of element in action" />
        </div>
        <div className="card__description">
          <p>{customElement.description}</p>
        </div>
      </div>
      <div className="card__content_bottom techs">
        {customElement.tech &&
          <span
            className="tag tag--blue"
            style={{
              margin: "3px",
            }}
          >
            {customElement.tech}
          </span>
        }
      </div>
    </div >
  )
}

CustomElementCardListItem.propTypes = {
  customElement: PropTypes.object.isRequired,
}

export default CustomElementCardListItem
