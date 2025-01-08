import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        className="raw_logo"
        width="50%"
        height="40%"
        viewBox="0 0 440 305"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="myHexagon"
          d="M293.545 167.405L229.5 204.381C227.025 205.81 223.975 205.81 221.5 204.381L157.455 167.405C154.98 165.976 153.455 163.335 153.455 160.476L153.455 86.5234C153.455 83.6653 154.98 81.0243 157.455 79.5952L221.5 42.6187C223.975 41.1896 227.025 41.1897 229.5 42.6187L293.545 79.5952C296.02 81.0243 297.545 83.6653 297.545 86.5234L297.545 160.476C297.545 163.335 296.02 165.976 293.545 167.405Z"
          stroke={theme.body}
          stroke-width="4"
        />
        <path
          class="myHexagon"
          d="M147.455 73.5953L211.5 36.6188C213.975 35.1898 217.025 35.1898 219.5 36.6188L283.545 73.5953C286.02 75.0244 287.545 77.6654 287.545 80.5235L287.545 154.477C287.545 157.335 286.02 159.976 283.545 161.405L219.5 198.381C217.025 199.81 213.975 199.81 211.5 198.381L147.455 161.405C144.98 159.976 143.455 157.335 143.455 154.477L143.455 80.5235C143.455 77.6654 144.98 75.0244 147.455 73.5953Z"
          stroke={theme.body}
          stroke-width="4"
        />
        {/* Letter S - Improved geometric design */}
        <path
          className="letter"
          d="M185 90.5C185 86.5 188 84.5 192 84.5C196 84.5 200 86.5 200 86.5V94C200 94 196 92 193 92C190 92 190 94.5 193 96C196 97.5 200 99 200 103.5C200 108 196 110 192 110C188 110 184 108 184 108V100.5C184 100.5 188 102.5 191 102.5C194 102.5 194 100 191 98.5C188 97 185 95.5 185 90.5Z"
          stroke={theme.body}
          strokeWidth="3"
        />

        {/* Letter R - Improved geometric design */}
        <path
          className="letter"
          d="M235 158V120H250C258 120 258 135 250 135H235M250 135L260 158"
          stroke={theme.body}
          strokeWidth="3"
        />
        {/* Removed signature all together */}
        <defs>
          <style
            dangerouslySetInnerHTML={{
              __html: `
          
      .signature1{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 1s linear forwards 0.5s;
			-o-animation: dash 1s linear forwards 0.5s;
			-moz-animation: dash 1s linear forwards 0.5s;
			animation: dash 1s linear forwards 0.5s;
		}
		.signature2{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 1s linear forwards 0.7s;
			-o-animation: dash 1s linear forwards 0.7s;
			-moz-animation: dash 1s linear forwards 0.7s;
			animation: dash 1s linear forwards 0.7s;
		}
		.signature3{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 1s linear forwards 0.9s;
			-o-animation: dash 1s linear forwards 0.9s;
			-moz-animation: dash 1s linear forwards 0.9s;
			animation: dash 1s linear forwards 0.9s;
		}
		.signature4{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 1s linear forwards 1.1s;
			-o-animation: dash 1s linear forwards 1.1s;
			-moz-animation: dash 1s linear forwards 1.1s;
			animation: dash 1s linear forwards 1.1s;
		}
		.signature5{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 1s linear forwards 1.3s;
			-o-animation: dash 1s linear forwards 1.3s;
			-moz-animation: dash 1s linear forwards 1.3s;
			animation: dash 1s linear forwards 1.3s;
		}
		.signature6{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 1s linear forwards 1.5s;
			-o-animation: dash 1s linear forwards 1.5s;
			-moz-animation: dash 1s linear forwards 1.5s;
			animation: dash 1s linear forwards 1.5s;
		}
		.signature7{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 1s linear forwards 1.7s;
			-o-animation: dash 1s linear forwards 1.7s;
			-moz-animation: dash 1s linear forwards 1.7s;
			animation: dash 1s linear forwards 1.7s;
		}
		.signature8{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 1s linear forwards 1.9s;
			-o-animation: dash 1s linear forwards 1.9s;
			-moz-animation: dash 1s linear forwards 1.9s;
			animation: dash 1s linear forwards 1.9s;
		}
		.signature9{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 1s linear forwards 2.1s;
			-o-animation: dash 1s linear forwards 2.1s;
			-moz-animation: dash 1s linear forwards 2.1s;
			animation: dash 1s linear forwards 2.1s;
		}
		.signature10{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 1s linear forwards 2.3s;
			-o-animation: dash 1s linear forwards 2.3s;
			-moz-animation: dash 1s linear forwards 2.3s;
			animation: dash 1s linear forwards 2.3s;
		}
		.signature11{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 1s linear forwards 2.5s;
			-o-animation: dash 1s linear forwards 2.5s;
			-moz-animation: dash 1s linear forwards 2.5s;
			animation: dash 1s linear forwards 2.5s;
		}
		.signature12{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 1s linear forwards 2.7s;
			-o-animation: dash 1s linear forwards 2.7s;
			-moz-animation: dash 1s linear forwards 2.7s;
			animation: dash 1s linear forwards 2.7s;
		}
		.signature13{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 1s linear forwards 2.9s;
			-o-animation: dash 1s linear forwards 2.9s;
			-moz-animation: dash 1s linear forwards 2.9s;
			animation: dash 1s linear forwards 2.9s;
		}
		.signature14{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 1s linear forwards 3.1s;
			-o-animation: dash 1s linear forwards 3.1s;
			-moz-animation: dash 1s linear forwards 3.1s;
			animation: dash 1s linear forwards 3.1s;
		}
		.signature15{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 1s linear forwards 3.3s;
			-o-animation: dash 1s linear forwards 3.3s;
			-moz-animation: dash 1s linear forwards 3.3s;
			animation: dash 1s linear forwards 3.3s;
		}

		.signature{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 6s linear forwards 0.5s;
			-o-animation: dash 6s linear forwards 0.5s;
			-moz-animation: dash 6s linear forwards 0.5s;
			animation: dash 6s linear forwards 0.5s;
		}

		.letter{
			opacity: 0;
			-webkit-animation: fadein 2s linear forwards 2.5s;
			-o-animation: fadein 2s linear forwards 2.5s;
			-moz-animation: fadein 2s linear forwards 2.5s;
			animation: fadein 2s linear forwards 2.5s;
		}

		@-webkit-keyframes fadein{
			from{
				opacity: 0;
			}
			to{
				opacity: 1;
			}
		}

      .myHexagon{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 4s linear forwards 0.5s;
			-o-animation: dash 4s linear forwards 0.5s;
			-moz-animation: dash 4s linear forwards 0.5s;
			animation: dash 4s linear forwards 0.5s;
		}

		@-webkit-keyframes dash{
			from{
				stroke-dashoffset: 800;
			}
			to{
				stroke-dashoffset: 0;
			}
		}
    `,
            }}
          />
        </defs>
      </svg>
    );
  }
}

export default LogoLoader;
