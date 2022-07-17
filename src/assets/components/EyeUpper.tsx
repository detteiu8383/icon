import { Component } from "solid-js";

const EyeBlow: Component<{ isJito?: boolean }> = (props) => {
  const fullOpened =
    "M207 236C212 222 228.5 210.315 244.5 203.5C260.935 196.5 277 197.5 286.5 200C284 206 286 214 280 232C280.5 225 279 210 276 207.5C272.741 204.784 252.899 210.218 248 212C237 216 218 225.5 207 236Z";
  const jitoOpened =
    "M208.5 238.5C215.5 226.5 231 217 247 211.5C263.893 205.693 277.5 203 287 205.5C284.5 211.5 285 211.5 279 229.5C279.5 222.5 279.5 212.75 278 211.5C277 210.667 254.399 218.218 249.5 220C238.5 224 219.5 232 208.5 238.5Z";
  const closed =
    "M212 249.5C223.5 248.5 241.071 249.5 256.5 243.5C270.5 238.056 279.5 227.5 288 213C285.5 223 282.5 233.262 275 242.222C277.36 238.42 279 236 281 229.5C279 236 277 245.61 259.5 252.5C242 259.394 227 255 212 249.5Z";

  const opened = () => (props.isJito ? jitoOpened : fullOpened);

  return (
    <path d={opened()} fill="#661133">
      <animate
        class="anim-eye-blink"
        attributeName="d"
        calcMode="spline"
        dur="0.3s"
        restart="always"
        repeatCount={1}
        keyTimes="0; 0.5; 1"
        keySplines="0.5 0 0.9 1.0;0.1 0 0.5 1"
        values={[opened(), closed, opened()].join(";")}
      />
    </path>
  );
};

const EyeShadow: Component<{ isJito?: boolean }> = (props) => {
  const fullOpened =
    "M211 225C217.5 218 225 212 234 207C224 210 215 216 211 225Z";
  const jitoOpened =
    "M211.5 226.5C218 221 227 215 236 210C226 213 216.5 218.5 211.5 226.5Z";
  const closed =
    "M212.5 229.5C220.5 226 230 221.5 238.5 216C228.5 219.5 219.5 224 212.5 229.5Z";

  const opened = () => (props.isJito ? jitoOpened : fullOpened);

  return (
    <path d={opened()} fill="#661133">
      <animate
        class="anim-eye-blink"
        attributeName="d"
        calcMode="spline"
        dur="0.3s"
        restart="always"
        repeatCount={1}
        keyTimes="0; 0.5; 1"
        keySplines="0.5 0 0.9 1.0;0.1 0 0.5 1"
        values={[opened(), closed, opened()].join(";")}
      />
    </path>
  );
};

const EyeUpper: Component<{ isJito?: boolean }> = (props) => {
  return (
    <>
      <EyeBlow isJito={props.isJito} />
      <EyeShadow isJito={props.isJito} />
    </>
  );
};

export default EyeUpper;
