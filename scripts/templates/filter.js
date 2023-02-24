export class DropdownFilter {
	constructor() {
		this.isOpen = false;
		this.value = "popularity";
		this.textContent = "Popularité";
		this.dropdown = null;
		this.render();
		// this.accessibility();
		// this.handleClickWindow();
	}

	/**
	 * @param {Event} e
	 */
	handleChange(e) {
		/** @type {HTMLLIElement} */
		const li = e.target;
		const listLi = document.querySelectorAll(".filter-dropdown__option");
		const ul = document.querySelector(".filter-dropdown__options");
		const value = e.target.dataset.option;
		const textContent = e.target.textContent;
		const btnDrop = document.querySelector(".filter-dropdown__button");
		const label = btnDrop.querySelector(".filter-dropdown__label");

		this.value = value;
		this.textContent = textContent;
		label.textContent = textContent;

		listLi.forEach((li) => li.classList.remove("selected"));
		li.classList.add("selected");
		ul.classList.remove("active");
		btnDrop.classList.add("round")
	}

	handleClickWindow() {
		window.addEventListener("click", (e) => {});
	}

	handleClick() {
		const options = this.dropdown.querySelector(".filter-dropdown__options");
		const btn = this.dropdown.querySelector(".filter-dropdown__button");
		options.classList.toggle("active");
		btn.classList.toggle("round");
	}

	accessibility() {
		/** @type {NodeListOf<HTMLLIElement>} */
		const options = this.dropdown.querySelectorAll(".filter-dropdown__option");
		console.log(options);
		let active = -1;

		this.dropdown.addEventListener("keydown", (e) => {
			console.log(e.key);
			const keyCode = e.key;

			if (keyCode === "ArrowDown") {
				if (active < options.length - 1) {
					active++;
					console.log(options[active]);
					options[active].classList.toggle("focus");
				}
			}
			else if (keyCode === "ArrowUp") {
				if (active > 0) {
					active--;
					console.log(options[active]);
					options[active].classList.toggle("focus");
				}
			}
		})
	}

	render() {
		const template = document.getElementById("template-filter");
        const dropdown = document.importNode(template.content, true);

		dropdown.querySelector(".filter-dropdown__label").textContent = this.textContent;
		dropdown.querySelector(".filter-dropdown__button").addEventListener("click", (e) => this.handleClick(e));
		dropdown.querySelector(".filter-dropdown__option").classList.add("selected");
		dropdown.querySelectorAll(".filter-dropdown__option").forEach((li) => li.addEventListener("click", (e) => this.handleChange(e)))

        document.getElementById("filter").appendChild(dropdown);

		this.dropdown = document.querySelector(".filter-dropdown");
	}
}