// Hover effect start
class HoverButton {
    constructor(el) {
        this.el = el;
        this.hover = false;
        this.calculatePosition();
        this.attachEventsListener();
    }

    attachEventsListener() {
        window.addEventListener('mousemove', e => this.onMouseMove(e));
        window.addEventListener('resize', e => this.calculatePosition(e));
    }

    calculatePosition() {
        gsap.set(this.el, {
            x: 0,
            y: 0,
            scale: 1
        });

        const box = this.el.getBoundingClientRect();
        this.x = box.left + box.width * 0.5;
        this.y = box.top + box.height * 0.5;
        this.width = box.width;
        this.height = box.height;
    }

    onMouseMove(e) {
        let hover = false;
        let hoverArea = this.hover ? 0.7 : 0.5;
        let x = e.clientX - this.x;
        let y = e.clientY - this.y;
        let distance = Math.sqrt(x * x + y * y);
        if (distance < this.width * hoverArea) {
            hover = true;
            if (!this.hover) {
                this.hover = true;
            }
            this.onHover(e.clientX, e.clientY);
        }

        if (!hover && this.hover) {
            this.onLeave();
            this.hover = false;
        }
    }

    onHover(x, y) {
        gsap.to(this.el, {
            x: (x - this.x) * 0.2,
            y: (y - this.y) * 0.2,
            // scale: 1.15,
            ease: 'power1.out',
            duration: 0.4
        });

        this.el.style.zIndex = 10;
    }
    onLeave() {
        gsap.to(this.el, {
            x: 0,
            y: 0,
            scale: 1,
            ease: 'elastic.out(1,1)',
            duration: 0.7
        });

        this.el.style.zIndex = 1;
    }
}

// seletor here
const btn1 = document.querySelector('nav .magnetic-element');
new HoverButton(btn1);

const btn2 = document.querySelector('nav ul li:nth-child(1) a');
new HoverButton(btn2);

const btn3 = document.querySelector('nav ul li:nth-child(2) a');
new HoverButton(btn3);

const btn4 = document.querySelector('.block1 div .magnetic-element');
new HoverButton(btn4);

// Hover effect end 