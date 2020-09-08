

        $.fn.hitTest = function(x, y) {
            var bounds = this.offset();
            bounds.right = bounds.left + this.outerWidth();
            bounds.bottom = bounds.top + this.outerHeight();
            if (x >= bounds.left) {
                if (x <= bounds.right) {
                if (y >= bounds.top) {
                    if (y <= bounds.bottom) {
                    return true;
                    }
                }
                }
            }
            return false;
            }
    
            $(document).ready(function() {
            var mouse = {},
                $block = $('.container .block'),
                startFlag = false;
    
            $(document).on('mousemove', function(e) {
                mouse.x = e.pageX;
                mouse.y = e.pageY;
    
                $block.each(function(index, el) {
                var $this = $(this),
                    hover = $this.hitTest(mouse.x, mouse.y),
                    $bg = $this.find('.bg'),
                    $offset = $this.offset(),
                    width = $this.width(),
                    height = $this.height(),
                    center = {
                    x: $offset.left + (width / 2),
                    y: $offset.top + (height / 2)
                    }
                range = {
                    x1: center.x + width / 6,
                    x2: center.x - width / 6,
                    y1: center.y + height / 6,
                    y2: center.y - height / 6
                    },
                    toStyle = {
                    transition: (startFlag) ? 'all 0.3s' : 'none'
                    };
    
                if (!hover) {
                    if (mouse.x > range.x1) {
                    // right
                    toStyle.left = '200%';
                    } else if (mouse.x < range.x2) {
                    // left
                    toStyle.left = '0';
                    } else {
                    // center
                    toStyle.left = '100%';
                    }
    
                    if (mouse.y > range.y1) {
                    // bottom
                    toStyle.top = '200%';
                    } else if (mouse.y < range.y2) {
                    // top
                    toStyle.top = '0';
                    } else {
                    // center
                    toStyle.top = '100%';
                    }
    
                    $bg.css(toStyle);
                }
                });
    
                startFlag = true;
            });
    
            $block.on('mouseenter', function(e) {
                var $this = $(this),
                $bg = $this.find('.bg'),
                $offset = $this.offset(),
                width = $this.width(),
                height = $this.height(),
                center = {
                    x: $offset.left + (width / 2),
                    y: $offset.top + (height / 2)
                },
                range = {
                    x1: center.x + width / 6,
                    x2: center.x - width / 6,
                    y1: center.y + height / 6,
                    y2: center.y - height / 6
                },
                fromStyle = {
                    transition: 'none'
                },
                toStyle = {
                    transition: 'all 0.3s'
                };
    
                if (mouse.x > range.x1) {
                // right
                fromStyle.left = '200%';
                toStyle.left = '100%';
                } else if (mouse.x < range.x2) {
                // left
                fromStyle.left = '0';
                toStyle.left = '100%';
                } else {
                // center
                fromStyle.left = '100%';
                toStyle.left = '100%';
                }
    
                if (mouse.y > range.y1) {
                // bottom
                fromStyle.top = '200%';
                toStyle.top = '100%';
                } else if (mouse.y < range.y2) {
                // top
                fromStyle.top = '0';
                toStyle.top = '100%';
                } else {
                // center
                fromStyle.top = '100%';
                toStyle.top = '100%';
                }
    
                $bg.css(fromStyle);
                setTimeout(function() {
                $bg.css(toStyle);
                }, 10);
            });
            });
    
    