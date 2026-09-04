export const flipcard = {
    data: {},

    insertCard() {
        const UI = `
            <div class="col-12 col-md-4 p-4 d-flex justify-content-center">
                <div class="research-flip-card">
                    <div class="research-flip-card-inner">
                        <div class="research-flip-card-front p-2">
                            ${this.data.front}
                        </div>
                        <div class="research-flip-card-back p-2">
                            ${this.data.back}
                        </div>
                    </div>
                </div>
            </div>
        `;

        return UI;
    }
}
