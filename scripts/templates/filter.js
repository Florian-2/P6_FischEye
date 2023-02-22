export class DropdownFilter {
	constructor() {
		this.isOpen = false;
		this.value = "popularity";
		this.textContent = "Popularité";
		this.render();
	}

	/**
	 * @param {Event} e
	 */
	handleChange(e) {
		const value = e.target.dataset.option;
		const textContent = e.target.textContent;
		const btnDrop = document.querySelector(".filter-dropdown__button");
		const label = btnDrop.querySelector(".filter-dropdown__label");

		this.value = value;
		this.textContent = textContent;
		label.textContent = textContent;
	}

	/**
	 * @param {Event} e
	 */
	handleClick(e) {
		const dropdown = document.querySelector(".filter-dropdown");
		const btnDrop = e.target;

		if(this.isOpen) {
			dropdown.style.height = `${btnDrop.scrollHeight}px`;
			this.isOpen = false;
		}
		else {
			dropdown.style.height = `${dropdown.scrollHeight}px`;
			this.isOpen = true;
		}
	}

	render() {
		const template = document.getElementById("template-filter");
        const dropdown = document.importNode(template.content, true);

		dropdown.querySelector(".filter-dropdown__label").textContent = this.textContent;
		dropdown.querySelector(".filter-dropdown__button").addEventListener("click", (e) => this.handleClick(e));
		dropdown.querySelectorAll(".filter-dropdown__option").forEach((li) => li.addEventListener("click", (e) => this.handleChange(e)))

        document.getElementById("filter").appendChild(dropdown);
	}
}