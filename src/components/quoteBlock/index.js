import React from 'react';
import styled from 'styled-components';

const StyledQuoteBlock = styled.div`
padding: 112px 0;

.auth-quote-container {
    margin: 0 auto;
    width: 772px;

    &:before {
        background-image: url(${(props) => props.quoteImageUrl}), url(../images/quotation_marks.svg);
        background-position: center 60%,top;
        background-repeat: no-repeat;
        content: '';
        display: block;
        height: 160px;
        margin: 0 auto -24px;
        width: 196px;
    }

    a {
        color: #ff6f3d;
        display: block;
        font-size: 14px;
        line-height: 160%;
        margin-top: 32px;
        text-align: center;
    }

    p {
        font-size: 24px;
        font-style: italic;
        line-height: 160%;
        text-align: center;
    }
}
`;

class QuoteBlock extends React.Component {
    render() {
        return (
            <>
                <StyledQuoteBlock className="auth-quote-block" quoteImageUrl={this.props.quoteImageUrl}>
                    <div className="auth-quote-container">
                        <p>{this.props.quoteText}</p>
                        {this.props.quoteHref &&
                            <a href={this.props.quoteHref} target="_blank" rel="noreferrer">{this.props.quoteLinkText}</a>
                        }
                    </div>
                </StyledQuoteBlock>
            </>
        )
    }
};

export default QuoteBlock;