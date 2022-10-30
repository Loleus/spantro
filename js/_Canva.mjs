export default class Canva {
	constructor() {
		this.size = 32;
		this.raws = [...Array(44)];
	}
	getElem(elem) {
		return document.createElement(elem)
	}
	setRaw() {
		let oneLine = [];
		for (let k = 1; k <= this.size; k++) {
			oneLine.push(this.getElem("span"))
		}
		return oneLine;
	};
	getRaw(raw, elem) {
		for (let btn of elem) {
			let listItem = this.getElem("li")
			listItem.appendChild(btn);
			raw.appendChild(listItem);
		}
		return raw
	}
	initBoard() {
		for (let i = 0; i < this.raws.length; i++) {
			this.raws[i] = this.setRaw();
		}
		for (let elem of this.raws) {
			let raw = this.getElem("ol");
			document.querySelector("ol").appendChild(this.getRaw(raw, elem));
		}
	}
}