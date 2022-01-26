ace.define("ace/mode/grafito_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(GrafitoHighlightRules, exports, module) {
    "use strict";
    var oop = GrafitoHighlightRules("../lib/oop"),
        TextHighlightRules = GrafitoHighlightRules("./text_highlight_rules").TextHighlightRules,
        GrafitoHighlightRules = function() {
            this.$rules = {
                start: [{
                    token: "variable.parameter",
                    regex: "(?:->|=>|\\||\\:\\:|[\\-]{3,})"
                }, {
                    token: "keyword.operator",
                    regex: "<\\:|\\-\\:|ø|@|#|\\+|\\||\\*|\\$|\\-|\\%|\\/|\\.\\.|\\^|~|=|<|>|\\\\|(?<!\\w)\\?"
                }, {
                    token: "string",
                    regex: /"/,
                    next: "string"
                }, {
                    token: "string.other",
                    regex: "{",
                    next: "string.other"
                }, {
                    token: "comment",
                    regex: /;.+$/
                }, {
                    token: "paren.map-start",
                    regex: "#\\("
                }, {
                    token: "paren.block-start",
                    regex: "[\\[]"
                }, {
                    token: "paren.block-end",
                    regex: "[\\]]"
                }, {
                    token: "paren.parens-start",
                    regex: "[(]"
                }, {
                    token: "paren.parens-end",
                    regex: "\\)"
                }, {
                    token: "support.constant",
                    regex: "\\b(?:all|and|any|ascii|attr|attribute|attributeLabel|binary|block|char|contains|database|date|dictionary|empty|equal|even|every|exists|false|floating|function|greater|greaterOrEqual|if|in|inline|integer|is|key|label|leap|less|lessOrEqual|literal|logical|lower|nand|negative|nor|not|notEqual|null|numeric|odd|or|path|pathLabel|positive|prefix|prime|set|some|sorted|standalone|string|subset|suffix|superset|symbol|true|try|type|unless|upper|when|whitespace|word|xnor|xor|zero)\\?(?!:)"
                }, {
                    token: "support.constant",
                    regex: "\\b(abs|acos|acosh|acsec|acsech|actan|actanh|add|after|and|angle|append|arg|args|arity|array|as|asec|asech|asin|asinh|atan|atan2|atanh|attr|attrs|average|before|benchmark|blend|break|builtins1|builtins2|call|capitalize|case|ceil|chop|clear|close|color|combine|conj|continue|copy|cos|cosh|csec|csech|ctan|ctanh|cursor|darken|dec|decode|define|delete|desaturate|deviation|dictionary|difference|digest|digits|div|do|download|drop|dup|e|else|empty|encode|ensure|env|escape|execute|exit|exp|extend|extract|factors|false|fdiv|filter|first|flatten|floor|fold|from|function|gamma|gcd|get|goto|hash|help|hypot|if|inc|indent|index|infinity|info|input|insert|inspect|intersection|invert|join|keys|kurtosis|last|let|levenshtein|lighten|list|ln|log|loop|lower|mail|map|match|max|maybe|median|min|mod|module|mul|nand|neg|new|nor|normalize|not|now|null|open|or|outdent|pad|panic|path|pause|permissions|permutate|pi|pop|pow|powerset|powmod|prefix|print|prints|process|product|query|random|range|read|relative|remove|rename|render|repeat|replace|request|return|reverse|round|sample|saturate|script|sec|sech|select|serve|set|shl|shr|shuffle|sin|sinh|size|skewness|slice|sort|split|sqrt|squeeze|stack|strip|sub|suffix|sum|switch|symbols|symlink|sys|take|tan|tanh|terminal|to|true|truncate|try|type|union|unique|unless|until|unzip|upper|values|var|variance|volume|webview|while|with|wordwrap|write|xnor|xor|zip)\\b(?!:)"
                }, {
                    token: "support.constant.bold",
                    regex: "\\b(fetch|put|unput|link)\\b"
                }, {
                    token: "support.constant.bold",
                    regex: "\\b(CUSTOM_HELPERS)\\b"
                }, {
                    token: "constant.other",
                    regex: /\:\w[-\w'*.?!]*/
                }, {
                    token: "variable",
                    regex: /\w[-\w'*.?!]*\:/
                }, {
                    token: "constant.other",
                    regex: /'\w[-\w'*.?!]*/
                }, {
                    caseInsensitive: !1
                }],
                string: [{
                    token: "string",
                    regex: /"/,
                    next: "start"
                }, {
                    defaultToken: "string"
                }],
                "string.other": [{
                    token: "string.other",
                    regex: /}/,
                    next: "start"
                }, {
                    defaultToken: "string.other"
                }],
                tag: [{
                    token: "string.tag",
                    regex: />/,
                    next: "start"
                }, {
                    defaultToken: "string.tag"
                }],
                comment: [{
                    token: "comment",
                    regex: /}/,
                    next: "start"
                }, {
                    defaultToken: "comment"
                }]
            }
        };
    oop.inherits(GrafitoHighlightRules, TextHighlightRules), exports.GrafitoHighlightRules = GrafitoHighlightRules
}), ace.define("ace/mode/folding/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode"], function(BaseFoldMode, FoldMode, module) {
    "use strict";
    var oop = BaseFoldMode("../../lib/oop"),
        Range = BaseFoldMode("../../range").Range,
        BaseFoldMode = BaseFoldMode("./fold_mode").FoldMode,
        FoldMode = FoldMode.FoldMode = function(commentRegex) {
            commentRegex && (this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start)), this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end)))
        };
    oop.inherits(FoldMode, BaseFoldMode),
        function() {
            this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/, this.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/, this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/, this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/, this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/, this._getFoldWidgetBase = this.getFoldWidget, this.getFoldWidget = function(session, foldStyle, fw) {
                var line = session.getLine(fw);
                if (this.singleLineBlockCommentRe.test(line) && !this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line)) return "";
                fw = this._getFoldWidgetBase(session, foldStyle, fw);
                return !fw && this.startRegionRe.test(line) ? "start" : fw
            }, this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {
                var line = session.getLine(row);
                if (this.startRegionRe.test(line)) return this.getCommentRegionBlock(session, line, row);
                var match = line.match(this.foldingStartMarker);
                if (match) {
                    var i = match.index;
                    if (match[1]) return this.openingBracketBlock(session, match[1], row, i);
                    var range = session.getCommentFoldRange(row, i + match[0].length, 1);
                    return range && !range.isMultiLine() && (forceMultiline ? range = this.getSectionRange(session, row) : "all" != foldStyle && (range = null)), range
                }
                if ("markbegin" !== foldStyle && (match = line.match(this.foldingStopMarker))) {
                    i = match.index + match[0].length;
                    return match[1] ? this.closingBracketBlock(session, match[1], row, i) : session.getCommentFoldRange(row, i, -1)
                }
            }, this.getSectionRange = function(session, row) {
                for (var startIndent = (line = session.getLine(row)).search(/\S/), startRow = row, startColumn = line.length, endRow = row += 1, maxRow = session.getLength(); ++row < maxRow;) {
                    var line, indent = (line = session.getLine(row)).search(/\S/);
                    if (-1 !== indent) {
                        if (indent < startIndent) break;
                        var subRange = this.getFoldWidgetRange(session, "all", row);
                        if (subRange) {
                            if (subRange.start.row <= startRow) break;
                            if (subRange.isMultiLine()) row = subRange.end.row;
                            else if (startIndent == indent) break
                        }
                        endRow = row
                    }
                }
                return new Range(startRow, startColumn, endRow, session.getLine(endRow).length)
            }, this.getCommentRegionBlock = function(session, line, row) {
                for (var startColumn = line.search(/\s*$/), maxRow = session.getLength(), startRow = row, re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/, depth = 1; ++row < maxRow;) {
                    line = session.getLine(row);
                    var m = re.exec(line);
                    if (m && (m[1] ? depth-- : depth++, !depth)) break
                }
                if (startRow < row) return new Range(startRow, startColumn, row, line.length)
            }
        }.call(FoldMode.prototype)
}), ace.define("ace/mode/matching_brace_outdent", ["require", "exports", "module", "ace/range"], function(MatchingBraceOutdent, exports, module) {
    "use strict";
    var Range = MatchingBraceOutdent("../range").Range,
        MatchingBraceOutdent = function() {};
    ! function() {
        this.checkOutdent = function(line, input) {
            return !!/^\s+$/.test(line) && /^\s*\}/.test(input)
        }, this.autoOutdent = function(doc, row) {
            var indent = doc.getLine(row).match(/^(\s*\})/);
            if (!indent) return 0;
            var column = indent[1].length,
                indent = doc.findMatchingBracket({
                    row: row,
                    column: column
                });
            if (!indent || indent.row == row) return 0;
            indent = this.$getIndent(doc.getLine(indent.row));
            doc.replace(new Range(row, 0, row, column - 1), indent)
        }, this.$getIndent = function(line) {
            return line.match(/^\s*/)[0]
        }
    }.call(MatchingBraceOutdent.prototype), exports.MatchingBraceOutdent = MatchingBraceOutdent
}), ace.define("ace/mode/grafito", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/grafito_highlight_rules", "ace/mode/folding/cstyle", "ace/mode/matching_brace_outdent", "ace/range"], function(Mode, exports, module) {
    "use strict";
    var oop = Mode("../lib/oop"),
        TextMode = Mode("./text").Mode,
        GrafitoHighlightRules = Mode("./grafito_highlight_rules").GrafitoHighlightRules,
        GrafitoFoldMode = Mode("./folding/cstyle").FoldMode,
        MatchingBraceOutdent = Mode("./matching_brace_outdent").MatchingBraceOutdent,
        Mode = (Mode("../range").Range, function() {
            this.HighlightRules = GrafitoHighlightRules, this.foldingRules = new GrafitoFoldMode, this.$outdent = new MatchingBraceOutdent, this.$behaviour = this.$defaultBehaviour
        });
    oop.inherits(Mode, TextMode),
        function() {
            this.lineCommentStart = ";", this.blockComment = {
                start: "comment {",
                end: "}"
            }, this.getNextLineIndent = function(state, line, tab) {
                var match, indent = this.$getIndent(line),
                    endState = this.getTokenizer().getLineTokens(line, state),
                    tokens = endState.tokens,
                    endState = endState.state;
                if (tokens.length && "comment" == tokens[tokens.length - 1].type) return indent;
                if ("start" == state)(match = line.match(/^.*[\{\[\(]\s*$/)) && (indent += tab);
                else if ("doc-start" == state) {
                    if ("start" == endState) return "";
                    (match = line.match(/^\s*(\/?)\*/)) && (match[1] && (indent += " "), indent += "* ")
                }
                return indent
            }, this.checkOutdent = function(state, line, input) {
                return this.$outdent.checkOutdent(line, input)
            }, this.autoOutdent = function(state, doc, row) {
                this.$outdent.autoOutdent(doc, row)
            }, this.$id = "ace/mode/grafito"
        }.call(Mode.prototype), exports.Mode = Mode
}), ace.require(["ace/mode/grafito"], function(m) {
    "object" == typeof module && "object" == typeof exports && module && (module.exports = m)
});