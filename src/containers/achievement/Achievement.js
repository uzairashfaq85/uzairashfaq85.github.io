import React, { useContext, useState } from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import { achievementSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Achievement() {

  const { isDark } = useContext(StyleContext);

  const [showMore, setShowMore] = useState(false);

  if (!achievementSection.display) {
    return null;
  }

  // number of visible achievements
  const limit = achievementSection.showLimit || achievementSection.achievementsCards.length;

  // visible achievements
  const visibleAchievements = showMore
    ? achievementSection.achievementsCards
    : achievementSection.achievementsCards.slice(0, limit);

  return (
    <Fade bottom duration={1000} distance="20px">

      <div className="main" id="achievements">

        <div className="achievement-main-div">

          {/* Header */}
          <div className="achievement-header">

            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {achievementSection.title}
            </h1>

            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {achievementSection.subtitle}
            </p>

          </div>


          {/* Achievement Cards */}
          <div className="achievement-cards-div">

            {visibleAchievements.map((card, i) => (
              <AchievementCard
                key={i}
                isDark={isDark}
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  image: card.image,
                  imageAlt: card.imageAlt,
                  footer: card.footerLink
                }}
              />
            ))}

          </div>


          {/* More / Less Button */}
          {achievementSection.achievementsCards.length > limit && (

            <div className="achievement-button-container">

              <button
                className="achievement-button"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Show Less" : "More Certifications"}
              </button>

            </div>

          )}

        </div>

      </div>

    </Fade>
  );
}
