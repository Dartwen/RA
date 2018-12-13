class ProgressBar extends React.Component {

    canvas = null;
    getRefCanvas = canvas => this.canvas = canvas;
    state = {
        width: 0,
        height: 0
    };


    componentDidMount() {
        this.showCanvas();
        window.addEventListener('resize', this.resizeHandler);
    }

    componentWillUpdate(nextProps) {
        this.drawCanvas(nextProps);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeHandler)
    }

    showCanvas() {
        this.circleDepth = 7;
        this.circleOuterR = 52 - this.circleDepth;
        this.circleInnerR = 45 - this.circleDepth;
        this.circleOuterColor = '#4ca89a';
        this.circleInnerColor = '#96d6f4';

        this.drawCanvas();
    }

    drawCanvas(nextProps) {
        const {total, completed} = nextProps || this.props;
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;

        this.ctx.font = '24px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.lineWidth = this.circleDepth;
        this.canvasX = this.canvas.width / 2;
        this.canvasY = this.canvas.height / 2;

        let part = completed / total;

        this.ctx.beginPath();
        this.ctx.clearRect(0, 0, this.canvasX * 2, this.canvasY * 2);
        this.ctx.arc(this.canvasX, this.canvasY, this.circleInnerR, 0, Math.PI * 2 * part);
        this.ctx.strokeStyle = this.circleInnerColor;
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.arc(this.canvasX, this.canvasY, this.circleOuterR, 0, Math.PI * 2);
        this.ctx.strokeStyle = this.circleOuterColor;
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.fillText(Math.ceil(part * 100) + '%', this.canvasX, this.canvasY + 10);
    }

    resizeHandler = () => {
        this.canvasX = this.canvas.offsetWidth;
        this.canvasY = this.canvas.offsetHeight;
        this.setState({
            width: this.canvas.offsetWidth,
            height: this.canvas.offsetHeight
        });

        this.drawCanvas();
    };

    render() {
        return (
            <canvas id="progressCanvas" className="progress" ref={this.getRefCanvas}/>
        );
    }
}
