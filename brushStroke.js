function randomIntFromRange(min, max) {
	return Math.random() * (max - min + 1) + min;
}

class BrushStroke {
	static get inputProperties() {
		return [
			"--color-of-stroke",
			"--y-value-of-stroke",
			"--x-value-of-stroke",
			"--number-of-lines",
		];
	}

	paint(ctx, size, props) {
		ctx.lineWidth = 2;
		ctx.strokeStyle = props.get("--color-of-stroke");
		for (let i = 0; i < props.get("--number-of-lines"); i++) {
			let start = randomIntFromRange(0, size.width * 0.1);
			let end = randomIntFromRange(size.width * 0.9, size.width);
			ctx.beginPath();
			ctx.moveTo(start, i);
			ctx.quadraticCurveTo(
				props.get("--x-value-of-stroke"),
				props.get("--y-value-of-stroke"),
				end,
				i
			);
			ctx.stroke();
		}
	}
}

registerPaint("brushstroke", BrushStroke);
