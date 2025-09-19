report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/Entire_document_1024px.png",
        "test": "../bitmaps_test/20250919-182455/Entire_document_1024px.png",
        "selector": "document",
        "fileName": "Entire_document_1024px.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 40
          },
          "rawMisMatchPercentage": 0.7443661325831703,
          "misMatchPercentage": "0.74",
          "analysisTime": 69
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Entire_document_1200px.png",
        "test": "../bitmaps_test/20250919-182455/Entire_document_1200px.png",
        "selector": "document",
        "fileName": "Entire_document_1200px.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 40
          },
          "rawMisMatchPercentage": 0.6351924331376386,
          "misMatchPercentage": "0.64",
          "analysisTime": 74
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Header_tag_1024px.png",
        "test": "../bitmaps_test/20250919-182455/Header_tag_1024px.png",
        "selector": "header",
        "fileName": "Header_tag_1024px.png",
        "label": "Header tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 3.5384114583333335,
          "misMatchPercentage": "3.54",
          "analysisTime": 39
        },
        "diffImage": "../bitmaps_test/20250919-182455/failed_diff_Header_tag_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Header_tag_1200px.png",
        "test": "../bitmaps_test/20250919-182455/Header_tag_1200px.png",
        "selector": "header",
        "fileName": "Header_tag_1200px.png",
        "label": "Header tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 3.0194444444444444,
          "misMatchPercentage": "3.02",
          "analysisTime": 12
        },
        "diffImage": "../bitmaps_test/20250919-182455/failed_diff_Header_tag_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Nav_tag_1024px.png",
        "test": "../bitmaps_test/20250919-182455/Nav_tag_1024px.png",
        "selector": "nav",
        "fileName": "Nav_tag_1024px.png",
        "label": "Nav tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 5.69706498951782,
          "misMatchPercentage": "5.70",
          "analysisTime": 13
        },
        "diffImage": "../bitmaps_test/20250919-182455/failed_diff_Nav_tag_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Nav_tag_1200px.png",
        "test": "../bitmaps_test/20250919-182455/Nav_tag_1200px.png",
        "selector": "nav",
        "fileName": "Nav_tag_1200px.png",
        "label": "Nav tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 5.69706498951782,
          "misMatchPercentage": "5.70",
          "analysisTime": 21
        },
        "diffImage": "../bitmaps_test/20250919-182455/failed_diff_Nav_tag_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Link_with_data-qa_hover_1024px.png",
        "test": "../bitmaps_test/20250919-182455/Link_with_data-qa_hover_1024px.png",
        "selector": "[data-qa=\"nav-hover\"]",
        "fileName": "Link_with_data-qa_hover_1024px.png",
        "label": "Link with data-qa_hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Link_with_data-qa_hover_1200px.png",
        "test": "../bitmaps_test/20250919-182455/Link_with_data-qa_hover_1200px.png",
        "selector": "[data-qa=\"nav-hover\"]",
        "fileName": "Link_with_data-qa_hover_1200px.png",
        "label": "Link with data-qa_hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Link_with_class_is-active_1024px.png",
        "test": "../bitmaps_test/20250919-182455/Link_with_class_is-active_1024px.png",
        "selector": "a.is-active",
        "fileName": "Link_with_class_is-active_1024px.png",
        "label": "Link with class_is-active",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Link_with_class_is-active_1200px.png",
        "test": "../bitmaps_test/20250919-182455/Link_with_class_is-active_1200px.png",
        "selector": "a.is-active",
        "fileName": "Link_with_class_is-active_1200px.png",
        "label": "Link with class_is-active",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Main_tag_1024px.png",
        "test": "../bitmaps_test/20250919-182455/Main_tag_1024px.png",
        "selector": "main",
        "fileName": "Main_tag_1024px.png",
        "label": "Main tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 50
          },
          "rawMisMatchPercentage": 0.5701013513513513,
          "misMatchPercentage": "0.57",
          "analysisTime": 54
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Main_tag_1200px.png",
        "test": "../bitmaps_test/20250919-182455/Main_tag_1200px.png",
        "selector": "main",
        "fileName": "Main_tag_1200px.png",
        "label": "Main tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 50
          },
          "rawMisMatchPercentage": 0.48648648648648646,
          "misMatchPercentage": "0.49",
          "analysisTime": 75
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1024px.png",
        "test": "../bitmaps_test/20250919-182455/Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.8602941176470588,
          "misMatchPercentage": "0.86",
          "analysisTime": 34
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1200px.png",
        "test": "../bitmaps_test/20250919-182455/Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.8602941176470588,
          "misMatchPercentage": "0.86",
          "analysisTime": 60
        }
      },
      "status": "pass"
    }
  ]
});