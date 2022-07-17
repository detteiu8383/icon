import { Component, createEffect, createSignal } from "solid-js";

const Iris: Component<{ pos: { x: number; y: number } }> = (props) => {
  return (
    <g id="iris-parent" transform={`translate(${props.pos.x} ${props.pos.y})`}>
      <path
        d="M271.132 212.58C276.528 226.613 273.711 238.991 263.598 242.106C253.486 245.221 244.193 236.573 240.757 221.936C237.321 207.299 239.903 194.994 248.291 192.41C256.679 189.826 265.737 198.546 271.132 212.58Z"
        fill="#551155"
      />
      <path
        d="M270.209 212.611C273.989 224.884 271.813 235.39 262.421 238.283C253.029 241.176 245.319 233.716 241.538 221.443C237.074 206.95 241.959 196.453 248.88 194.321C255.8 192.19 265.745 198.118 270.209 212.611Z"
        fill="#EE2266"
      />
      <g
        id="iris-center"
        transform={`translate(${props.pos.x / 6} ${props.pos.y / 6})`}
      >
        <path
          d="M266.092 209.947C269.984 219.099 268.245 228.118 261.977 230.049C255.71 231.98 249.197 225.501 247.266 215.746C245.313 205.884 248.795 199.579 252.263 198.511C255.731 197.443 262.157 200.695 266.092 209.947Z"
          fill="#551155"
        />
        <path
          d="M265.369 210.693C268.08 217.706 267.065 224.296 260.8 226.226C254.535 228.156 249.987 223.278 248.282 215.956C246.577 208.633 248.329 201.816 252.852 200.422C257.375 199.029 262.659 203.68 265.369 210.693Z"
          fill="#EE2266"
        />
      </g>
    </g>
  );
};

const EyeWhite: Component<{ isJito?: boolean }> = (props) => {
  const fullOpened =
    "M280 232C279 242.5 275.313 250.59 264 256C241 267 216 245.5 216 228C216 223.5 227.148 213.055 247.5 206C285 193 281.612 215.077 280 232Z";
  const jitoOpend =
    "M279 229.5C277.5 236.5 270.5 245.217 260.5 250C242.5 258.609 217.594 248.5 216.5 231C216.344 228.5 228.148 222.055 248.5 215C286 202 282.562 212.877 279 229.5Z";
  const closed =
    "M280 232C275 241.5 267.971 247 258.5 250.5C239.5 257.522 224 252 218.5 250.5C225 251 240.5 252 256.5 246.5C271.778 241.248 275.5 236.5 280 232Z";

  const opened = () => (props.isJito ? jitoOpend : fullOpened);

  return (
    <path id="eye-white" d={opened()} fill="white">
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
    "M288 193.5C247.5 193.5 233 197 207 223.5C207 232.5 217 246 224 250C237 224 274 212 288 212C288 199.5 288 199.424 288 193.5Z";
  const jitoOpend =
    "M288 193.5C247.5 193.5 233 197 207 223.5C207 232.5 217 246 224 250C236 228 274 218 288 218C288 205.5 288 199.424 288 193.5Z";
  const closed =
    "M288 193.5C247.5 193.5 233 197 207 223.5C207 232.5 211.5 246.5 218.5 250.5C239 255 267 250.5 280 232C280 219.5 288 199.424 288 193.5Z";

  const opened = () => (props.isJito ? jitoOpend : fullOpened);

  return (
    <g style="mix-blend-mode:multiply">
      <path d={opened()} fill="#D5D5FF">
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
    </g>
  );
};

const LowerEyeShadow: Component<{ isJito?: boolean }> = (props) => {
  const fullOpened =
    "M277 245C271.5 253 255 262 239 257C239 265 277 263.5 277 245Z";
  const jitoOpend =
    "M274.5 239C269.5 246 250.5 254 236.5 252C236.5 260 274.5 257.5 274.5 239Z";
  const closed =
    "M275.5 239.5C269.5 245 252.5 254 237 254C237 262 275.5 258 275.5 239.5Z";

  const opened = () => (props.isJito ? jitoOpend : fullOpened);

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

const EyeLower: Component<{ isJito?: boolean }> = (props) => {
  const [eyePos, setEyePos] = createSignal<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [mousePos, setMousePos] = createSignal<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const mouseMove = (e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  window.addEventListener("mousemove", mouseMove);

  createEffect(() => {
    setEyePos(calcEyePos());
  });

  const eyeCenter = () => {
    const eyeWhite = document.getElementById(
      "eye-white"
    )! as unknown as SVGPathElement;
    const x =
      eyeWhite.getBoundingClientRect().left +
      eyeWhite.getBoundingClientRect().width / 2;
    const y =
      eyeWhite.getBoundingClientRect().top +
      eyeWhite.getBoundingClientRect().height / 2;
    return { x, y };
  };

  const ex = { x: 13, y: -4 };
  const ey = { x: -1.5, y: -5 };
  const ec = { x: -7, y: 4 };
  const eyeTilt = Math.atan2(ex.y, ex.x);

  const calcEyePos = () => {
    const x = mousePos().x - eyeCenter().x;
    const y = mousePos().y - eyeCenter().y;
    const mouseAngle = Math.atan2(y, x);
    const localAngle = -(mouseAngle - eyeTilt);
    const edge = {
      x: ex.x * Math.cos(localAngle) + ey.x * Math.sin(localAngle),
      y: ex.y * Math.cos(localAngle) + ey.y * Math.sin(localAngle),
    };
    const r = (2 * Math.atan(Math.sqrt(x * x + y * y) / 100)) / Math.PI;
    const normalized = {
      x: r * edge.x + ec.x,
      y: r * edge.y + ec.y,
    };
    return normalized;
  };

  return (
    <>
      <EyeWhite isJito={props.isJito} />
      <mask
        id="mask2_2_4"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="216"
        y="202"
        width="65"
        height="58"
      >
        <EyeWhite isJito={props.isJito} />
      </mask>
      <g mask="url(#mask2_2_4)">
        <Iris pos={eyePos()} />
        <LowerEyeShadow isJito={props.isJito} />
        <EyeShadow isJito={props.isJito} />
      </g>
    </>
  );
};

export default EyeLower;
