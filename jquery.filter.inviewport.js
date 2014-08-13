(function( $ ) {

    $.expr.filters.inviewport = function(el) {
        var viewportWidth = $(window).width(),
            viewportHeight = $(window).height(),

            documentScrollTop = $(document).scrollTop(),
            documentScrollLeft = $(document).scrollLeft(),

            minTop = documentScrollTop,
            maxTop = documentScrollTop + viewportHeight,
            minLeft = documentScrollLeft,
            maxLeft = documentScrollLeft + viewportWidth,

            $myElement = $(el),
            elementOffset = $myElement.offset(),
            elementWidth = $myElement.width(),
            elementHeight = $myElement.height();

        return (
            (elementOffset.top+elementHeight > minTop && elementOffset.top < maxTop) && // bottom is lower than the document top AND top is higher than the document bottom
            (elementOffset.top > minTop && elementOffset.top+elementHeight < maxTop) && // top is lower than the document top AND bottom is higher than the document bottom
            (elementOffset.left+elementWidth > minLeft &&elementOffset.left < maxLeft) && // right edge is right from the document left, left edge is left from the document right
            (elementOffset.left > minLeft &&elementOffset.left+elementWidth < maxLeft) // left edge is right from the document left, right edge is left from the document right
        );
    }

}( jQuery ));
