(this.webpackJsonp = this.webpackJsonp || []).push([
  [3, 4],
  {
    kLjC: function (t, e, a) {
      "use strict";
      a.r(e),
        a.d(e, "configCharts", function () {
          return d;
        }),
        a.d(e, "configSvgz", function () {
          return s;
        }),
        a.d(e, "createDatasets", function () {
          return p;
        }),
        a.d(e, "createChart", function () {
          return u;
        }),
        a.d(e, "pcnt", function () {
          return m;
        }),
        a.d(e, "pcnt2", function () {
          return h;
        }),
        a.d(e, "findGender", function () {
          return _;
        }),
        a.d(e, "cma", function () {
          return y;
        }),
        a.d(e, "dlr", function () {
          return f;
        }),
        a.d(e, "zeronulls", function () {
          return b;
        }),
        a.d(e, "findEdu", function () {
          return g;
        }),
        a.d(e, "findAge", function () {
          return w;
        }),
        a.d(e, "indsList", function () {
          return v;
        }),
        a.d(e, "findIndustry", function () {
          return A;
        }),
        a.d(e, "find", function () {
          return k;
        }),
        a.d(e, "findEmpEdu", function () {
          return x;
        }),
        a.d(e, "findRace", function () {
          return S;
        }),
        a.d(e, "findEmp", function () {
          return j;
        }),
        a.d(e, "findVet", function () {
          return D;
        }),
        a.d(e, "findDisEmp", function () {
          return E;
        });
      var n = a("RIqP"),
        r = a.n(n),
        c = a("VphZ"),
        o = a("KTtF");
      function i(t, e) {
        var a;
        if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (a = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return l(t, e);
              var a = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === a && t.constructor && (a = t.constructor.name);
              if ("Map" === a || "Set" === a) return Array.from(t);
              if (
                "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              )
                return l(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            a && (t = a);
            var n = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return n >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[n++] };
              },
              e: function (t) {
                throw t;
              },
              f: r,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var c,
          o = !0,
          i = !1;
        return {
          s: function () {
            a = t[Symbol.iterator]();
          },
          n: function () {
            var t = a.next();
            return (o = t.done), t;
          },
          e: function (t) {
            (i = !0), (c = t);
          },
          f: function () {
            try {
              o || null == a.return || a.return();
            } finally {
              if (i) throw c;
            }
          },
        };
      }
      function l(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var a = 0, n = new Array(e); a < e; a++) n[a] = t[a];
        return n;
      }
      var d = function (t) {
          t.map(function (t) {
            window["".concat(t[0])] = new o.chart(t[1], t[2]);
          });
        },
        s = function (t) {
          t.map(function (t) {
            window["".concat(t[0])] = o.newSvg(t[1], t[2], t[3]);
          });
        },
        p = function (t, e, a) {
          a.map(function (a) {
            Array.isArray(a)
              ? a.map(function (a) {
                  window["".concat(e).concat(a)] = o.filterData(t, "Time", [
                    a + "Q1",
                    a + "Q2",
                    a + "Q3",
                    a + "Q4",
                  ]);
                })
              : (window["".concat(e).concat(a)] = o.filterData(t, "Time", a));
          });
        },
        u = function (t) {
          t.map(function (t) {
            var e = t.chart;
            e.setBounds.apply(e, r()(t.bounds));
            var a = e.addCategoryAxis.apply(e, r()(t.categoryAxis));
            (t.xtitle && (a.title = t.xtitle),
            t.order && a.addOrderRule(r()(t.order)),
            t.legend) &&
              (e.addLegend("65%", "5%", "40%", "95%").fontSize = "1px");
            var n = e.addMeasureAxis.apply(e, r()(t.measureAxis));
            (n.title = t.ytitle), (n.tickFormat = c.format(t.tickFormat));
            (([
              "Workers receiving TANF benefits",
              "Workforce/Service in TANF",
              "Recipients amongst MD Workers",
            ].includes(t.ytitle)
              ? e.addSeries(t.series, o.plot.line)
              : e.addSeries(t.series, o.plot.bar)
            ).lineMarkers = !0),
              t.colors &&
                (Array.isArray(t.colors[0])
                  ? t.colors.map(function (t) {
                      return e.assignColor.apply(e, r()(t));
                    })
                  : t.colors && e.assignColor.apply(e, r()(t.colors))),
              e.draw();
          });
        },
        m = function (t) {
          return "N/A" == t || "S" == t
            ? t
            : (null == t) | ("--" == t)
            ? "--"
            : "%" != t.slice(t.length - 1)
            ? c.format(".1%")(1 * t)
            : c.format(".1%")(Number(0.01 * t.slice(0, -1)));
        },
        h = function (t) {
          return "N/A" == t || "S" == t
            ? t
            : (null == t) | ("--" == t)
            ? "--"
            : "%" != t.slice(t.length - 1)
            ? c.format(".1%")(0.01 * t)
            : c.format(".1%")(Number(0.01 * t.slice(0, -1)));
        },
        _ = function (t, e) {
          var a = t.filter(function (t) {
            var a = t.Indicator_Status == ["Male", "Female"][e];
            return (a = a || t.Indicator_Value == ["Male", "Female"][e]);
          })[0];
          return (a = null == a ? "--" : a.Amount);
        },
        y = function (t) {
          return "N/A" == t || "S" == t
            ? t
            : (null == t) | ("--" == t)
            ? "--"
            : c.format(",.0f")(1 * t);
        },
        f = function (t) {
          return "N/A" == t || "S" == t
            ? t
            : (null == t) | ("--" == t)
            ? "--"
            : c.format("$,.0f")(1 * t);
        },
        b = function (t) {
          var e,
            a = [],
            n = i(t);
          try {
            for (n.s(); !(e = n.n()).done; ) {
              var r = e.value;
              ("N/A" != r.Amount && "S" != r.Amount) || (r.Amount = 0),
                a.push(r);
            }
          } catch (t) {
            n.e(t);
          } finally {
            n.f();
          }
          return a;
        },
        g = function (t, e) {
          var a = [
              "Educational attainment not available (workers aged 24 or younger)",
              "Less than High school",
              "High school or equivalent, no college",
              "Some college or Associate degree",
              "Bachelor's degree or advanced degree",
            ],
            n = t.filter(function (t) {
              var n = t.Indicator_Value;
              return 0 == e
                ? (["NR", "N/A", "NA"].includes(n),
                  ["NR", "N/A", "NA"].includes(n) || n == a[e])
                : n == a[e];
            });
          return (n = null == (n = n[0]) ? "--" : n.Amount);
        },
        w = function (t, e) {
          var a = t.filter(function (t) {
            return (
              t.Indicator_Value ==
              [
                "14-18",
                "19-21",
                "22-24",
                "25-34",
                "35-44",
                "45-54",
                "55-64",
                "65-99",
              ][e]
            );
          })[0];
          return (a = null == a ? "--" : a.Amount);
        },
        v = [
          "Agriculture, Forestry, Fishing and Hunting",
          "Mining, Quarrying, and Oil and Gas Extraction",
          "Utilities",
          "Construction",
          "Manufacturing",
          "Wholesale Trade",
          "Retail Trade",
          "Transportation and Warehousing",
          "Information",
          "Finance and Insurance",
          "Real Estate and Rental and Leasing",
          "Professional, Scientific, and Technical Services",
          "Management of Companies and Enterprises",
          "Administrative and Support and Waste Management and Remediation Services",
          "Educational Services",
          "Health Care and Social Assistance",
          "Arts, Entertainment, and Recreation",
          "Accommodation and Food Services",
          "Other Services (except Public Administration)",
          "Public Administration",
        ],
        A = function (t, e) {
          var a = t.filter(function (t) {
            return t.Indicator_Value == v[e];
          })[0];
          return (a = null == a ? "--" : a.Amount);
        },
        k = function (t, e) {
          var a = t.filter(function (t) {
            return t.Time == ["2015", "2016", "2017", "2018", "2019"][e];
          })[0];
          return (a = null == a ? "--" : a.Amount);
        },
        x = function (t, e, a) {
          var n = [
              "Less than Highschool",
              "Highschool",
              "Some College",
              "Bachelor's or Higher",
            ][e],
            r = ["Employed", "Unemployed", "NIL"][a],
            c = t.filter(function (t) {
              return (t.Indicator_Status == n) & (t.Employment_Status == r);
            })[0];
          return (c = null == c ? "--" : c.Amount);
        },
        S = function (t, e) {
          var a = t.filter(function (t) {
            return (
              t.Indicator_Status == ["White", "Black", "Asian", "Hispanic"][e]
            );
          })[0];
          return (a = null == a ? "--" : a.Amount);
        },
        j = function (t, e) {
          var a = t.filter(function (t) {
            return (
              t.Employment_Status ==
              ["Unemployed", "Labor Force", "Employed"][e]
            );
          });
          return (a = null == (a = a[0]) ? "--" : a.Amount);
        },
        D = function (t, e) {
          var a = t.filter(function (t) {
            return t.Indicator_Status == ["Veteran", "Non Veteran"][e];
          })[0];
          return (a = null == a ? "--" : a.Amount);
        },
        E = function (t, e, a) {
          var n = t.filter(function (t) {
            return (
              t.Employment_Status ==
                ["Unemployed", "Labor Force", "Employed"][e] &&
              t.Indicator_Status == ["Disabled", "Non Disabled"][a]
            );
          });
          return (n = null == (n = n[0]) ? "--" : n.Amount);
        },
        O = "pop";
      (window.togNum1 = 0),
        (window.onresize = function () {
          return drawAll();
        }),
        (window.c_collapsables = [
          "pop",
          "empl_edu_gend",
          "empl_race_ethn",
          "empl_vet",
          "disabl_pov",
          "tanf",
          "snap",
          "empl_status",
        ]),
        (window.w_collapsables = [
          "collapse1",
          "collapse2",
          "collapse3",
          "collapse4",
          "collapse5",
        ]),
        (window.collapsables = md
          ? [].concat(r()(c_collapsables), r()(w_collapsables), [
              "collapse9",
              "collapse16",
              "collapse17",
              "collapse20",
              "collapse19",
            ])
          : wd
          ? w_collapsables
          : c_collapsables),
        (window.c_prints = [
          "pop_chart_print",
          "empl_edu_gend_chart_print",
          "empl_race_ethn_chart_print",
          "empl_vet_chart_print",
          "disabl_pov_chart_print",
          "tanf_chart_print",
          "empl_status_chart_print",
          "snap_chart_print",
        ]),
        (window.w_prints = [
          "Landing",
          "Print3",
          "Print4",
          "PrintFive",
          "Print6",
          "Print17",
        ]),
        (window.prints = md
          ? [].concat(r()(c_prints), r()(w_prints), [
              "Print11",
              "Print18",
              "Print19",
              "Print20",
              "Print21",
            ])
          : wd
          ? w_prints
          : c_prints),
        (window.c_charts = [
          "pop_chart",
          "empl_edu_gend_chart",
          "empl_race_ethn_chart",
          "empl_vet_chart",
          "disabl_pov_chart",
          "tanf_chart",
          "empl_status_chart",
          "snap_chart",
          "Landing",
        ]),
        (window.w_charts = [
          "Chart3",
          "Chart4",
          "ChartFive",
          "Chart6",
          "Chart17",
        ]),
        (window.charts = md
          ? [].concat(r()(c_charts), r()(w_charts), [
              "Chart11",
              "Chart18",
              "Chart19",
              "Chart20",
              "Chart21",
            ])
          : wd
          ? w_charts
          : c_charts),
        (window.stylem = function (t, e, a) {
          return t.forEach(function (t) {
            document.getElementById(t).style[e] = a;
          });
        }),
        (window.hideall = function (t) {
          return stylem(t, "display", "none");
        }),
        (window.showall = function (t) {
          return stylem(t, "display", "inline");
        }),
        (window.toggleTab = function (t, e) {
          hideall(collapsables),
            showall(t),
            (O = e),
            drawAll(),
            hideall(prints);
        }),
        (window.popchart = function () {
          return toggleTab(["collapse1", "collapse5"], 1);
        }),
        (window.educhart = function () {
          return toggleTab(["collapse2", "collapse5"], 2);
        }),
        (window.racechart = function () {
          return toggleTab(["collapse3", "collapse5"], 3);
        }),
        (window.vetchart = function () {
          return toggleTab(["collapse4", "collapse5"], 4);
        }),
        (window.sepchart = function () {
          return toggleTab(["collapse5", "collapse5"], 5);
        }),
        (window.drawAll = function () {
          (wd && !md) ||
            (pop_chart.draw(0, !0),
            mhhi_chart.draw(0, !0),
            empl_edu_chart.draw(0, !0),
            empl_edu_gend_chart.draw(0, !0),
            empl_race_ethn_chart.draw(0, !0),
            chart5.draw(0, !0),
            window.empl_vet_chart.draw(0, !0),
            emp_dis_chart.draw(0, !0),
            empl_status_chart.draw(0, !0),
            tanf_attainment_chart.draw(0, !0),
            tanf_rate_chart.draw(0, !0),
            tanf_data.draw(0, !0),
            emplStatusCounties.includes(CountyName) ||
              (window.work_exp_pov_chart.draw(0, !0),
              pwork_exp_pov_chart.draw(0, !0)),
            snap_chart.draw(0, !0),
            snap_chart2.draw(0, !0),
            ppop_chart.draw(0, !0),
            mhhi_chart_print.draw(0, !0),
            pempl_edu_chart.draw(0, !0),
            pempl_edu_gend_chart.draw(0, !0),
            pempl_race_ethn_chart.draw(0, !0),
            pchart5.draw(0, !0),
            empl_vet_print_chart.draw(0, !0),
            emp_dis_chart_print.draw(0, !0),
            pempl_status_chart.draw(0, !0),
            ptanf_attainment_chart.draw(0, !0),
            ptanf_rate_chart.draw(0, !0),
            ptanf_data.draw(0, !0),
            psnap_chart.draw(0, !0),
            psnap_chart2.draw(0, !0)),
            (wd || md) &&
              (window.wChart.draw(0, !0),
              avgChart.draw(0, !0),
              jc.draw(0, !0),
              newHireChart.draw(0, !0),
              turnChart.draw(0, !0),
              chart8.draw(0, !0),
              chart61.draw(0, !0),
              pwChart.draw(0, !0),
              pavgChart.draw(0, !0),
              pjc.draw(0, !0),
              pnewHireChart.draw(0, !0),
              pturnChart.draw(0, !0),
              pchart8.draw(0, !0),
              pchart61.draw(0, !0)),
            md &&
              (chart15.draw(0, !0),
              aprogChart.draw(0, !0),
              aNewChart.draw(0, !0),
              chart1.draw(0, !0),
              chart18.draw(0, !0));
        }),
        (window.printClick = function () {
          1 == O
            ? (popchart(),
              (document.getElementById("Chart3").style.display = "none"),
              (document.getElementById("Print3").style.display = "inline"),
              drawAll())
            : 2 == O
            ? (educhart(),
              (document.getElementById("Chart4").style.display = "none"),
              (document.getElementById("Print4").style.display = "inline"))
            : 3 == O
            ? (racechart(),
              (document.getElementById("ChartFive").style.display = "none"),
              (document.getElementById("PrintFive").style.display = "inline"))
            : 4 == O
            ? (vetchart(),
              (document.getElementById("Chart6").style.display = "none"),
              (document.getElementById("Print6").style.display = "inline"))
            : 5 == O
            ? (sepchart(),
              (document.getElementById("Chart17").style.display = "none"),
              (document.getElementById("Print17").style.display = "inline"))
            : "pop" == O
            ? (pop(), hideall(["pop_chart"]), showAll(["pop_chart_print"]))
            : "educhart" == O
            ? (educhart(),
              hideall(["empl_edu_gend_chart"]),
              showAll(["empl_edu_gend_chart_print"]))
            : "racechart" == O
            ? (racechart(),
              hideall(["empl_race_ethn_chart"]),
              showAll(["empl_race_ethn_chart_print"]))
            : "vetchart" == O
            ? (vetchart(),
              hideall(["empl_vet_chart"]),
              showAll(["empl_vet_chart_print"]))
            : "disbilities" == O
            ? (dischart(),
              hideall(["disabl_pov_chart"]),
              showAll(["disabl_pov_chart_print"]))
            : "tanf" == O
            ? (tanf(), hideall(["tanf_chart"]), showAll(["tanf_chart_print"]))
            : "empl_status" == O
            ? (empl_status(),
              hideall(["empl_status_chart"]),
              showAll(["empl_status_chart_print"]))
            : "tanf_attainment" == O &&
              (tanf_attainment(),
              hideall(["snap_chart_print"]),
              showAll(["snap_chart"])),
            drawAll(),
            window.print();
        }),
        (window.printAll = function () {
          showAll(collapsables),
            hideall(charts),
            showall(prints),
            drawAll(),
            window.print();
        }),
        (window.onafterprint = function () {
          hideall(collapsables),
            hideall(prints),
            showall(charts),
            showAll(["Landing"]);
        }),
        (window.onload = function () {
          (document.getElementById("dropdownMenu").style.display = "none"),
            (document.getElementById("dropdownMenuY").style.display = "none"),
            (document.getElementById("dropdownMenuQ").style.display = "none"),
            (document.getElementById("title").style.display = "none"),
            document.querySelectorAll("[data-lbl]").forEach(function (t) {
              t.addEventListener("click", function () {
                (O = t.dataset.lbl),
                  localStorage.setItem("Clicked", O),
                  (document.querySelector(
                    "#notalldataavailablewarning"
                  ).style.display = "none");
                var e = document.getElementById("title");
                e.style.display = "inline";
                document.querySelector("#dropdownMenu");
                var a = document.querySelector("#dropdownMenuY"),
                  n = document.querySelector("#dropdownMenuQ"),
                  c =
                    "undefined" != typeof countyLookup
                      ? "undefined" != typeof wdaLookup
                        ? [].concat(r()(countyLookup), r()(wdaLookup))
                        : countyLookup
                      : wdaLookup,
                  o = (c = md ? [].concat(r()(c), r()(mdLookup)) : c).filter(
                    function (t) {
                      return t.tab == O;
                    }
                  )[0];
                (e.innerHTML = o.lbl),
                  console.log({ whichTab: O }),
                  console.log({ viewing: localStorage.getItem("viewing") }),
                  console.log({ tabInfo: o });
                var i = !1,
                  l = o.dmy ? "data16" : "data16q4",
                  d = function (t) {
                    Array.from(t.children).map(function (e) {
                      var a = o.yearAvailable[e.value];
                      !!a &&
                      a.some(function (a) {
                        return (
                          t.value == e.value && (i = !0),
                          t.value != e.value && a && e.value,
                          !!a
                        );
                      })
                        ? (e.style.display = "inline")
                        : ((e.style.display = "none"),
                          console.log("nothing", e));
                    });
                  };
                o && o.dmy && d(a),
                  o && o.dmq && d(n),
                  console.log(
                    { currentYearSelectionAvailable: i },
                    { validAlternateYear: l }
                  ),
                  i ||
                    (console.log("Changing Quartr"),
                    o.dmy ? a.value : n.value,
                    document
                      .querySelector("option[value=".concat(l, "]"))
                      .click());
                var s = function (t, e, a) {
                  document.getElementById(t).style.display = e[a]
                    ? "inline"
                    : "none";
                };
                s("dropdownMenu", o, "dm"),
                  s("dropdownMenuY", o, "dmy"),
                  s("dropdownMenuQ", o, "dmq"),
                  hideall(collapsables),
                  showall([O]),
                  hideall(prints),
                  drawAll(),
                  o.dmy && countyChartChange(),
                  o.dmq && wdaChartChange();
              }),
                t.removeAttribute("disabled");
            });
        });
    },
    kZ4c: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a("o0o1"),
        r = a.n(n),
        c = a("yXPU"),
        o = a.n(c),
        i = a("VphZ"),
        l = a("KTtF"),
        d = a("kLjC");
      o()(
        r.a.mark(function t() {
          var e,
            a,
            n,
            c,
            o,
            s,
            p,
            u,
            m,
            h,
            _,
            y,
            f,
            b,
            g,
            w,
            v,
            A,
            k,
            x,
            S,
            j,
            D,
            E,
            O,
            I,
            N,
            C,
            M;
          return r.a.wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    (e =
                      "Maryland" == CountyName2
                        ? "./data/MarylandData.csv"
                        : "./data/CountyData.csv"),
                    (t.next = 3),
                    i.csv(e)
                  );
                case 3:
                  if (
                    ((a = t.sent),
                    "Maryland" != CountyName2 &&
                      (a = l.filterData(a, "Location", CountyName2)),
                    (n = ["2015", "2016", "2017", "2018", "2019"]),
                    [
                      "2016Q1",
                      "2016Q2",
                      "2016Q3",
                      "2016Q4",
                      "2017Q1",
                      "2017Q2",
                      "2017Q3",
                      "2017Q4",
                      "2018Q1",
                      "2018Q2",
                      "2018Q3",
                      "2018Q4",
                      "2019Q1",
                      "2019Q2",
                      "2019Q3",
                      "2019Q4",
                    ],
                    (c = l.filterData(
                      a,
                      "Indicator",
                      "Median Household Income"
                    )),
                    (o = l.filterData(a, "Indicator", "Total Population")),
                    (s = l.filterData(a, "Indicator_Status", [
                      "Less than Highschool",
                      "Highschool",
                      "Some College",
                      "Bachelor's or Higher",
                    ])),
                    (s = l.filterData(s, "Employment_Status", [
                      "Unemployed",
                      "NIL",
                      "Employed",
                    ])),
                    Object(d.createDatasets)(s, "EduAttainment", n),
                    (p = l.filterData(a, "Indicator_Status", [
                      "Male",
                      "Female",
                    ])),
                    (p = l.filterData(
                      p,
                      "Indicator",
                      "Unemployment By Gender"
                    )),
                    Object(d.createDatasets)(p, "unempByGender", n),
                    (u = l.filterData(a, "Indicator", "Unemployment By Race")),
                    (u = l.filterData(u, "Indicator_Status", [
                      "White",
                      "Black",
                      "Asian",
                      "Hispanic",
                    ])),
                    Object(d.createDatasets)(u, "raceData", n),
                    (m = l.filterData(a, "Indicator", "Unemployment By Race")),
                    (m = l.filterData(m, "Indicator_Status", [
                      "White",
                      "Hispanic",
                    ])),
                    Object(d.createDatasets)(m, "ethData", n),
                    (h = l.filterData(
                      a,
                      "Indicator",
                      "Unemployment By Veteran Status"
                    )),
                    (window.vetData2015 = l.filterData(h, "Time", "2015")),
                    Object(d.createDatasets)(h, "vetData", n),
                    (_ = l.filterData(
                      a,
                      "Indicator",
                      "Employment Status By Poverty Status"
                    )),
                    (_ = l.filterData(_, "Employment_Status", [
                      "Unemployed",
                      "Labor Force",
                      "Employed",
                    ])),
                    (_ = l.filterData(_, "Indicator_Status", [
                      "Below Poverty",
                    ])),
                    (window.povRate2018 = l.filterData(_, "Time", "2018")),
                    Object(d.createDatasets)(_, "povRate", n),
                    (y = l.filterData(
                      a,
                      "Indicator",
                      "Employment Status By Disability Status"
                    )),
                    (y = l.filterData(y, "Employment_Status", [
                      "Unemployed",
                      "Labor Force",
                      "Employed",
                    ])),
                    Object(d.createDatasets)(y, "disAttainment", n),
                    (window.disAttainment2015 = l.filterData(y, "Time", [
                      "2008-2011",
                      "2015",
                    ])),
                    (f = l.filterData(a, "Indicator", "TANF Workers")),
                    (b = l.filterData(
                      a,
                      "Indicator",
                      "TANF Participants in Workforce Service "
                    )),
                    (g = l.filterData(
                      a,
                      "Indicator",
                      "Percent of Workforce Service participants in TANF (%)"
                    )),
                    (w = l.filterData(
                      a,
                      "Indicator",
                      "Percent of Workers in TANF (%)"
                    )),
                    (v = n.map(function (t) {
                      return [t];
                    })),
                    Object(d.createDatasets)(f, "tanfAttainment", v),
                    Object(d.createDatasets)(b, "tanfData", v),
                    Object(d.createDatasets)(g, "tanfRate", v),
                    Object(d.createDatasets)(w, "tanfPerc", v),
                    (A = ""),
                    emplStatusCounties.includes(CountyName))
                  ) {
                    t.next = 57;
                    break;
                  }
                  if ("Maryland" != CountyName) {
                    t.next = 48;
                    break;
                  }
                  (t.t0 = a), (t.next = 51);
                  break;
                case 48:
                  return (
                    (t.next = 50),
                    i.dsv(
                      ",",
                      "./data/emp18/emp_" +
                        CountyName4.replace(/[ ]/g, "") +
                        ".csv"
                    )
                  );
                case 50:
                  t.t0 = t.sent;
                case 51:
                  (A = t.t0).unshift([
                    "Employment Status Amongst Maryland Workers",
                    "",
                    "",
                    2016,
                    2017,
                    2018,
                  ]),
                    Object(d.createDatasets)(
                      l.filterData(a, "Indicator", "Work Experience by Gender"),
                      "workerDatag",
                      n
                    ),
                    Object(d.createDatasets)(
                      l.filterData(
                        a,
                        "Indicator",
                        "Work Experience by Education"
                      ),
                      "workerDatae",
                      n
                    ),
                    Object(d.createDatasets)(
                      l.filterData(a, "Indicator", "Work Experience by Race"),
                      "workerDatar",
                      n
                    ),
                    Object(d.createDatasets)(
                      l.filterData(
                        a,
                        "Indicator",
                        "Work Experience by Poverty"
                      ),
                      "workerDatap",
                      n
                    );
                case 57:
                  (k = l.filterData(a, "Indicator", "SNAP Recipient Workers")),
                    (x = l.filterData(
                      a,
                      "Indicator",
                      "SNAP Recipient Workers by Percentage"
                    )),
                    console.log(window),
                    Object(d.configSvgz)([
                      ["pop_svg", "#pop_chart", "100%", 400],
                      ["pop_chart_print", "#pop_chart_print", 750, 400],
                      [
                        "empl_edu_gend_svg",
                        "#empl_edu_gend_chart",
                        "100%",
                        400,
                      ],
                      [
                        "empl_edu_gend_chart_print",
                        "#empl_edu_gend_chart_print",
                        750,
                        400,
                      ],
                      [
                        "empl_race_ethn_svg",
                        "#empl_race_ethn_chart",
                        "100%",
                        400,
                      ],
                      [
                        "empl_race_ethn_chart_print",
                        "#empl_race_ethn_chart_print",
                        750,
                        400,
                      ],
                      ["empl_vet_svg", "#empl_vet_chart", "100%", 400],
                      ["empl_vet_print_svg", "#empl_vet_chart_print", 750, 400],
                      ["tanf_svg", "#tanf_chart", "100%", 400],
                      ["tanf_chart_print", "#tanf_chart_print", 750, 400],
                      ["disabl_pov_svg", "#disabl_pov_chart", "100%", 400],
                      [
                        "disabl_pov_chart_print",
                        "#disabl_pov_chart_print",
                        750,
                        400,
                      ],
                      ["empl_status_svg", "#empl_status_chart", "100%", 500],
                      [
                        "empl_status_chart_print",
                        "#empl_status_chart_print",
                        750,
                        400,
                      ],
                      ["snap_chart_svg", "#snap_chart", "100%", 400],
                      ["psnap_chart_svg", "#snap_chart_print", 750, 400],
                    ]),
                    Object(d.configCharts)([
                      ["pop_chart", pop_svg, o],
                      ["mhhi_chart", pop_svg, c],
                      ["ppop_chart", pop_chart_print, o],
                      ["mhhi_chart_print", pop_chart_print, c],
                      ["empl_edu_chart", empl_edu_gend_svg, s],
                      ["empl_edu_gend_chart", empl_edu_gend_svg, p],
                      ["pempl_edu_chart", empl_edu_gend_chart_print, s],
                      ["pempl_edu_gend_chart", empl_edu_gend_chart_print, p],
                      ["empl_race_ethn_chart", empl_race_ethn_svg, u],
                      ["chart5", empl_race_ethn_svg, m],
                      ["pchart5", empl_race_ethn_chart_print, m],
                      ["pempl_race_ethn_chart", empl_race_ethn_chart_print, u],
                      ["empl_vet_chart", empl_vet_svg, h],
                      ["empl_vet_print_chart", empl_vet_print_svg, h],
                      ["work_exp_pov_chart", empl_status_svg, []],
                      ["pwork_exp_pov_chart", empl_status_chart_print, []],
                      ["snap_chart", snap_chart_svg, k],
                      ["snap_chart2", snap_chart_svg, x],
                      ["psnap_chart", psnap_chart_svg, k],
                      ["psnap_chart2", psnap_chart_svg, x],
                      ["tanf_attainment_chart", tanf_svg, tanfAttainment2018],
                      [
                        "ptanf_attainment_chart",
                        tanf_chart_print,
                        tanfAttainment2018,
                      ],
                      ["tanf_data", tanf_svg, tanfData2018],
                      ["ptanf_data", tanf_chart_print, tanfData2018],
                      ["tanf_rate_chart", tanf_svg, tanfRate2018],
                      ["ptanf_rate_chart", tanf_chart_print, tanfRate2018],
                      ["tanf_perc_chart", tanf_svg, tanfPerc2018],
                      ["ptanf_perc_chart", tanf_chart_print, tanfPerc2018],
                      ["pempl_status_chart", disabl_pov_chart_print, _],
                      ["empl_status_chart", disabl_pov_svg, _],
                      [
                        "emp_dis_chart_print",
                        disabl_pov_chart_print,
                        disAttainment2018,
                      ],
                      ["emp_dis_chart", disabl_pov_svg, disAttainment2018],
                    ]),
                    (window.countyLookup = [
                      {
                        tab: "pop",
                        lbl: "Population and Median Household Income",
                        dm: !1,
                        dmy: !1,
                        dmq: !1,
                        charts: [pop_chart, mhhi_chart],
                        pcharts: [ppop_chart, mhhi_chart_print],
                        svgName: "#pop_chart",
                        data: {
                          data18: [o, c],
                          data17: [o, c],
                          data16: [o, c],
                          data15: [o, c],
                        },
                      },
                      {
                        tab: "empl_edu_gend",
                        lbl: "Demographics - Education and Gender",
                        dm: !0,
                        dmy: !0,
                        dmq: !1,
                        charts: [empl_edu_chart, empl_edu_gend_chart],
                        pcharts: [pempl_edu_chart, pempl_edu_gend_chart],
                        svgName: "#empl_edu_gend_chart",
                        data: {
                          data18: [EduAttainment2018, unempByGender2018],
                          data17: [EduAttainment2017, unempByGender2017],
                          data16: [EduAttainment2016, unempByGender2016],
                          data15: [EduAttainment2015, unempByGender2015],
                        },
                      },
                      {
                        tab: "empl_race_ethn",
                        lbl: "Demographics - Race and Ethnicity",
                        dm: !0,
                        dmy: !0,
                        dmq: !1,
                        charts: [empl_race_ethn_chart, chart5],
                        pcharts: [pempl_race_ethn_chart, pchart5],
                        svgName: "#empl_race_ethn_chart",
                        data: {
                          data18: [raceData2018, ethData2018],
                          data17: [raceData2017, ethData2017],
                          data16: [raceData2016, ethData2016],
                          data15: [raceData2015, ethData2015],
                        },
                      },
                      {
                        tab: "empl_vet",
                        lbl: "Demographics - Veterans Status",
                        dm: !0,
                        dmy: !0,
                        dmq: !1,
                        charts: [empl_vet_chart],
                        pcharts: [empl_vet_print_chart],
                        svgName: "#empl_vet_chart",
                        data: {
                          data18: [vetData2018],
                          data17: [vetData2017],
                          data16: [vetData2016],
                          data15: [vetData2015],
                        },
                      },
                      {
                        tab: "disabl_pov",
                        lbl: "Disability and Poverty",
                        dm: !0,
                        dmy: !0,
                        dmq: !1,
                        charts: [emp_dis_chart, empl_status_chart],
                        pcharts: [emp_dis_chart_print, pempl_status_chart],
                        svgName: "#disabl_pov_chart",
                        data: {
                          data18: [disAttainment2018, povRate2018],
                          data17: [disAttainment2017, povRate2017],
                          data16: [disAttainment2016, povRate2016],
                          data15: [disAttainment2015, povRate2015],
                        },
                      },
                      {
                        tab: "tanf",
                        lbl: "Temporary Aid for Needy Families (TANF) Stats",
                        dm: !0,
                        dmy: !0,
                        dmq: !1,
                        charts: [
                          tanf_attainment_chart,
                          tanf_perc_chart,
                          tanf_rate_chart,
                          tanf_data,
                        ],
                        pcharts: [
                          ptanf_attainment_chart,
                          ptanf_perc_chart,
                          ptanf_rate_chart,
                          ptanf_data,
                        ],
                        svgName: "#tanf_chart",
                        data: {
                          data19: [
                            tanfAttainment2019,
                            tanfPerc2019,
                            tanfRate2019,
                            tanfData2019,
                          ],
                          data18: [
                            tanfAttainment2018,
                            tanfPerc2018,
                            tanfRate2018,
                            tanfData2018,
                          ],
                          data17: [
                            tanfAttainment2017,
                            tanfPerc2017,
                            tanfRate2017,
                            tanfData2017,
                          ],
                          data16: [
                            tanfAttainment2016,
                            tanfPerc2016,
                            tanfRate2016,
                            tanfData2016,
                          ],
                          data15: [
                            tanfAttainment2015,
                            tanfPerc2015,
                            tanfRate2015,
                            tanfData2015,
                          ],
                        },
                      },
                      {
                        tab: "empl_status",
                        lbl: "Employment Status amongst Maryland Workers",
                        dm: !0,
                        dmy: !0,
                        dmq: !1,
                        charts: [work_exp_pov_chart],
                        pcharts: [pwork_exp_pov_chart],
                        svgName: "#empl_status_chart",
                        data: {
                          data18: emplStatusCounties.includes(CountyName)
                            ? []
                            : [
                                workerDatag2018,
                                workerDatar2018,
                                workerDatae2018,
                                workerDatap2018,
                              ],
                          data17: emplStatusCounties.includes(CountyName)
                            ? []
                            : [
                                workerDatag2017,
                                workerDatar2017,
                                workerDatae2017,
                                workerDatap2017,
                              ],
                          data16: emplStatusCounties.includes(CountyName)
                            ? []
                            : [
                                workerDatag2016,
                                workerDatar2016,
                                workerDatae2016,
                                workerDatap2016,
                              ],
                          data15: emplStatusCounties.includes(CountyName)
                            ? []
                            : [
                                workerDatag2015,
                                workerDatar2015,
                                workerDatae2015,
                                workerDatap2015,
                              ],
                        },
                      },
                      {
                        tab: "snap",
                        lbl: "SNAP Recipient Workers",
                        dm: !1,
                        dmy: !1,
                        dmq: !1,
                        charts: [snap_chart, snap_chart2],
                        pcharts: [psnap_chart, psnap_chart2],
                        svgName: "#snap_chart",
                        data: {
                          data18: [k, x],
                          data17: [k, x],
                          data16: [k, x],
                          data15: [k, x],
                        },
                      },
                    ]),
                    countyLookup.map(function (t) {
                      t.yearAvailable = {};
                      t.data &&
                        Object.keys(t.data).map(function (e) {
                          var a = t.data[e].map(function (t) {
                            return t.some(function (t) {
                              return (
                                ("N/A" != t) &
                                (null != t) &
                                ("--" != t) &
                                ("S" != t)
                              );
                            });
                          });
                          return (t.yearAvailable[e] = a), a;
                        });
                    }),
                    console.log({ countyLookup: countyLookup }),
                    (S = Object.keys(countyLookup[0].yearAvailable)
                      .map(function (t) {
                        return t.replace("data", "20");
                      })
                      .reverse()),
                    (document.getElementById(
                      "pop_table"
                    ).innerHTML = '\n        <tr class="HeadRow" style="background-color: white;">\n          <th>'
                      .concat(CountyName4, ":</th> ")
                      .concat(
                        S.map(function (t) {
                          return "<th>".concat(t, "</th>");
                        }).join(""),
                        " </tr>\n        <tr>\n          <th>Population</th> "
                      )
                      .concat(
                        S.map(function (t, e) {
                          return "<td>".concat(
                            Object(d.cma)(Object(d.find)(o, e)),
                            "</td>"
                          );
                        }).join(""),
                        '\n        </tr>\n        <tr class="FootRow">\n          <th>Median Household Income</th> '
                      )
                      .concat(
                        S.map(function (t, e) {
                          return "<td>".concat(
                            Object(d.cma)(Object(d.find)(c, e)),
                            "</td>"
                          );
                        }).join(""),
                        "\n        </tr>\n    "
                      )),
                    (S = Object.keys(countyLookup[1].yearAvailable).map(
                      function (t) {
                        return t.replace("data", "20");
                      }
                    )),
                    (j = "Maryland" == CountyName ? "" : "<td></td><td></td>"),
                    (document.getElementById(
                      "empl_edu_gend_table"
                    ).innerHTML = '\n    <tr class="HeadRow" style="background-color: white;">\n      <th>'
                      .concat(
                        CountyName4,
                        ": </th>\n      <th>Less than High School Graduate</th>\n      <th>High School Graduate (Includes Equivalency)</th>\n      <th>Some College or Associates</th>\n      <th>Bachelor's Degree or Higher</th>\n      "
                      )
                      .concat(j, "\n      ")
                      .concat(
                        "Maryland" == CountyName
                          ? ""
                          : "<th>Male</th><th>Female</th>",
                        "\n    </tr>\n    "
                      )
                      .concat(
                        S.map(function (t) {
                          var e = window["EduAttainment" + t],
                            a = window["unempByGender" + t];
                          return '<tr class="HeadRow" style="background-color: white;">\n          <th>'
                            .concat(
                              t,
                              "</th>\n          <th></th>\n          <th></th>\n          <th></th>\n          <th></th>\n          "
                            )
                            .concat(
                              "Maryland" == CountyName ? "" : "<th></th>",
                              "\n          "
                            )
                            .concat(
                              j,
                              "\n        </tr>\n        <tr>\n          <th>Employed</th>\n          <td>"
                            )
                            .concat(
                              Object(d.cma)(Object(d.findEmpEdu)(e, 0, 0)),
                              "</td>\n          <td>"
                            )
                            .concat(
                              Object(d.cma)(Object(d.findEmpEdu)(e, 1, 0)),
                              "</td>\n          <td>"
                            )
                            .concat(
                              Object(d.cma)(Object(d.findEmpEdu)(e, 2, 0)),
                              "</td>\n          <td>"
                            )
                            .concat(
                              Object(d.cma)(Object(d.findEmpEdu)(e, 3, 0)),
                              "</td>\n          "
                            )
                            .concat(
                              "Maryland" == CountyName
                                ? ""
                                : '<th rowspan="3" style="border-style: solid; border-color: #5281B7;">Unemployment Rate</th>',
                              "\n          "
                            )
                            .concat(
                              j,
                              "\n        </tr>\n        <tr>\n          <th>Unemployed</th>\n          <td>"
                            )
                            .concat(
                              Object(d.cma)(Object(d.findEmpEdu)(e, 0, 1)),
                              "</td>\n          <td>"
                            )
                            .concat(
                              Object(d.cma)(Object(d.findEmpEdu)(e, 1, 1)),
                              "</td>\n          <td>"
                            )
                            .concat(
                              Object(d.cma)(Object(d.findEmpEdu)(e, 2, 1)),
                              "</td>\n          <td>"
                            )
                            .concat(
                              Object(d.cma)(Object(d.findEmpEdu)(e, 3, 1)),
                              "</td>\n          "
                            )
                            .concat(
                              "Maryland" == CountyName
                                ? ""
                                : "<td>".concat(
                                    Object(d.pcnt2)(Object(d.findGender)(a, 0)), // first coloumn
                                    "</td>"
                                  ),
                              "\n          "
                            )
                            .concat(
                              "Maryland" == CountyName
                                ? ""
                                : "<td>".concat(
                                    Object(d.pcnt2)(Object(d.findGender)(a, 1)), // second coloun
                                    "</td>"
                                  ),
                              "\n        </tr>\n        <tr>\n          <th>Not In Labor Force (NIL)</th>\n          <td>"
                            )
                            .concat(
                              Object(d.cma)(Object(d.findEmpEdu)(e, 0, 2)),
                              "</td>\n          <td>"
                            )
                            .concat(
                              Object(d.cma)(Object(d.findEmpEdu)(e, 1, 2)),
                              "</td>\n          <td>"
                            )
                            .concat(
                              Object(d.cma)(Object(d.findEmpEdu)(e, 2, 2)),
                              "</td>\n          <td>"
                            )
                            .concat(
                              Object(d.cma)(Object(d.findEmpEdu)(e, 3, 2)),
                              "</td>\n          "
                            )
                            .concat(j, "\n        </tr>");
                        }).join(""),
                        '\n    <tr class="FootRow" style="padding:0px">\n      <th style="padding:0px"></th> \n      '
                      )
                      .concat(
                        S.map(function (t, e) {
                          return '<td style="padding:0px"></td>';
                        }).join(""),
                        " \n      "
                      )
                      .concat(
                        "Maryland" == CountyName
                          ? ""
                          : '<td style="padding:0px"></td><td style="padding:0px"></td>',
                        "\n    </tr>\n    "
                      )),
                    (S = Object.keys(countyLookup[2].yearAvailable)
                      .map(function (t) {
                        return t.replace("data", "20");
                      })
                      .reverse()),
                    (document.getElementById(
                      "empl_race_ethn_table"
                    ).innerHTML = '\n        <tr class="HeadRow" style="background-color: white;">\n          <th>'
                      .concat(
                        CountyName4,
                        ":</th>\n          <th>White</th>\n          <th>Black</th>\n          <th>Asian</th>\n          <th>Hispanic or Latino <br> (Any Race)</th>\n        </tr>\n        "
                      )
                      .concat(
                        S.map(function (t) {
                          var e = window["raceData" + t];
                          return '\n                <tr class="HeadRow">\n                  <th>'
                            .concat(
                              t,
                              "</th>\n                  <th></th>\n                  <th></th>\n                  <th></th>\n                  <th></th>\n                </tr>\n                <tr >\n                  <th>Unemployment Rate</th>\n                  <td>"
                            )
                            .concat(
                              Object(d.pcnt2)(Object(d.findRace)(e, 0)),
                              "</td>\n                  <td>"
                            )
                            .concat(
                              Object(d.pcnt2)(Object(d.findRace)(e, 1)),
                              "</td>\n                  <td>"
                            )
                            .concat(
                              Object(d.pcnt2)(Object(d.findRace)(e, 2)),
                              "</td>\n                  <td>"
                            )
                            .concat(
                              Object(d.pcnt2)(Object(d.findRace)(e, 3)),
                              "</td>\n                </tr>"
                            );
                        }).join(""),
                        '\n        <tr class="FootRow" style="padding:0px">\n          <th style="padding:0px"></th> \n          '
                      )
                      .concat(
                        S.map(function (t, e) {
                          return '<td style="padding:0px"></td>';
                        }).join(""),
                        " \n          "
                      )
                      .concat(
                        "Maryland" == CountyName
                          ? ""
                          : '<td style="padding:0px"></td><td style="padding:0px"></td>',
                        "\n        </tr>\n    "
                      )),
                    (S = Object.keys(countyLookup[3].yearAvailable)
                      .map(function (t) {
                        return t.replace("data", "20");
                      })
                      .reverse()),
                    (document.getElementById(
                      "empl_vet_table"
                    ).innerHTML = '\n        <tr class="HeadRow" style="background-color: white;">\n          <th>'
                      .concat(
                        CountyName4,
                        ":</th>\n          <th>Veteran</th>\n          <th>Non Veteran</th>\n        </tr>\n        "
                      )
                      .concat(
                        S.map(function (t) {
                          var e = window["vetData" + t];
                          return '<tr class="HeadRow">\n                  <th>'
                            .concat(
                              t,
                              '</th>\n                  <th></th>\n                  <th></th>\n                </tr>\n                <tr class="FootRow">\n                  <th>Unemployment Rate</th>\n                  <td>'
                            )
                            .concat(
                              Object(d.pcnt2)(Object(d.findVet)(e, 0)),
                              "</td>\n                  <td>"
                            )
                            .concat(
                              Object(d.pcnt2)(Object(d.findVet)(e, 1)),
                              "</td>\n                </tr>"
                            );
                        }).join(""),
                        "\n    "
                      )),
                    (S = Object.keys(countyLookup[4].yearAvailable).map(
                      function (t) {
                        return t.replace("data", "20");
                      }
                    )),
                    (document.getElementById(
                      "disabl_pov_table"
                    ).innerHTML = '\n        <tr class="HeadRow" style="background-color: white;">\n          <th>'
                      .concat(
                        CountyName4,
                        ": </th>\n          <th>Disabled Individuals</th>\n          <th>Individuals without Disabilities</th>\n          <th></th>\n          <th>Income in the past 12 months below poverty level</th>\n        </tr>\n        "
                      )
                      .concat(
                        S.map(function (t) {
                          var e = window["disAttainment" + t],
                            a = window["povRate" + t];
                          return '<tr class="HeadRow" style="background-color: white;">\n                  <th>'
                            .concat(
                              t,
                              "</th>\n                  <th></th>\n                  <th></th>\n                  <th></th>\n                  <th></th>\n                </tr>\n                <tr>\n                  <th>Labor Force</th>\n                  <td>"
                            )
                            .concat(
                              Object(d.cma)(Object(d.findDisEmp)(e, 1, 0)),
                              "</td>\n                  <td>"
                            )
                            .concat(
                              Object(d.cma)(Object(d.findDisEmp)(e, 1, 1)),
                              "</td>\n                  <td></td>\n                  <td>"
                            )
                            .concat(
                              Object(d.cma)(Object(d.findEmp)(a, 1)),
                              "</td>\n                </tr>\n                <tr>\n                  <th>Employed</th>\n                  <td>"
                            )
                            .concat(
                              Object(d.cma)(Object(d.findDisEmp)(e, 2, 0)),
                              "</td>\n                  <td>"
                            )
                            .concat(
                              Object(d.cma)(Object(d.findDisEmp)(e, 2, 1)),
                              "</td>\n                  <td></td>\n                  <td>"
                            )
                            .concat(
                              Object(d.cma)(Object(d.findEmp)(a, 2)),
                              "</td>\n                </tr>\n                <tr>\n                  <th>Unemployed</th>\n                  <td>"
                            )
                            .concat(
                              Object(d.cma)(Object(d.findDisEmp)(e, 0, 0)),
                              "</td>\n                  <td>"
                            )
                            .concat(
                              Object(d.cma)(Object(d.findDisEmp)(e, 0, 1)),
                              "</td>\n                  <td ></td>\n                  <td>"
                            )
                            .concat(
                              Object(d.cma)(Object(d.findEmp)(a, 0)),
                              "</td>\n                </tr>"
                            );
                        }).join(""),
                        '\n        <tr class="FootRow" style="padding:0px">\n          <th style="padding:0px"></th> \n          '
                      )
                      .concat(
                        [0, 1, 2, 3]
                          .map(function (t, e) {
                            return '<td style="padding:0px"></td>';
                          })
                          .join(""),
                        " \n        </tr>\n    "
                      )),
                    (window.display_tanf_table = function (t, e, a, n, r) {
                      var c = function (t, e) {
                        var a = t.filter(function (t) {
                          return (
                            t.Time.search(["Q1", "Q2", "Q3", "Q4"][e]) > -1
                          );
                        });
                        return (a = null == (a = a[0]) ? "--" : a.Amount);
                      };
                      document.getElementById(
                        "tanf_table"
                      ).innerHTML = '\n            <tr class="HeadRow" style="background-color: white;">\n              <th>'
                        .concat(
                          CountyName4,
                          ":</th>\n              <th>TANF Recipient Workers (count)</th>\n              <th>TANF Participants in Workforce Service (count)</th>\n              <th>Percent of Workers in TANF (percent)</th>\n              <th>Service participants in TANF (percent)</th>\n            </tr>\n            <tr>\n              <th>"
                        )
                        .concat(t, "Q1</th>\n              <td>")
                        .concat(
                          Object(d.cma)(c(e, 0)),
                          "</td>\n              <td>"
                        )
                        .concat(
                          Object(d.cma)(c(r, 0)),
                          "</td>\n              <td>"
                        )
                        .concat(
                          Object(d.pcnt2)(c(a, 0)),
                          "</td>\n              <td>"
                        )
                        .concat(
                          Object(d.pcnt2)(c(n, 0)),
                          "</td>\n            </tr>\n            <tr>\n              <th>"
                        )
                        .concat(t, "Q2</th>\n              <td>")
                        .concat(
                          Object(d.cma)(c(e, 1)),
                          "</td>\n              <td>"
                        )
                        .concat(
                          Object(d.cma)(c(r, 1)),
                          "</td>\n              <td>"
                        )
                        .concat(
                          Object(d.pcnt2)(c(a, 1)),
                          "</td>\n              <td>"
                        )
                        .concat(
                          Object(d.pcnt2)(c(n, 1)),
                          "</td>\n            </tr>\n            <tr>\n              <th>"
                        )
                        .concat(t, "Q3</th>\n              <td>")
                        .concat(
                          Object(d.cma)(c(e, 2)),
                          "</td>\n              <td>"
                        )
                        .concat(
                          Object(d.cma)(c(r, 2)),
                          "</td>\n              <td>"
                        )
                        .concat(
                          Object(d.pcnt2)(c(a, 2)),
                          "</td>\n              <td>"
                        )
                        .concat(
                          Object(d.pcnt2)(c(n, 2)),
                          "</td>\n            </tr>\n            <tr>\n              <th>"
                        )
                        .concat(t, "Q4</th>\n              <td>")
                        .concat(
                          Object(d.cma)(c(e, 3)),
                          "</td>\n              <td>"
                        )
                        .concat(
                          Object(d.cma)(c(r, 3)),
                          "</td>\n              <td>"
                        )
                        .concat(
                          Object(d.pcnt2)(c(a, 3)),
                          "</td>\n              <td>"
                        )
                        .concat(
                          Object(d.pcnt2)(c(n, 3)),
                          "</td>\n            </tr>\n        "
                        );
                    }),
                    display_tanf_table(
                      "2018",
                      tanfAttainment2018,
                      tanfPerc2018,
                      tanfRate2018,
                      tanfData2018
                    ),
                    emplStatusCounties.includes(CountyName) ||
                      ((D = i.select("#empl_status_table")),
                      (E = D.selectAll("tr").data(A).enter().append("tr")),
                      (O = 0),
                      E.selectAll("td")
                        .data(function (t) {
                          return (
                            (O += 1),
                            Object.keys(t).map(function (e) {
                              return {
                                column: e,
                                value:
                                  O <= 1 || isNaN(t[e]) || !t[e]
                                    ? t[e]
                                    : Object(d.cma)(t[e]),
                              };
                            })
                          );
                        })
                        .enter()
                        .append("td")
                        .text(function (t) {
                          return t.value;
                        })),
                    console.log(k),
                    (document.getElementById(
                      "snap_table"
                    ).innerHTML = '\n        <tr class="HeadRow">\n          <th>SNAP Recipient Workers</th> <th></th>\n          <th>2016</th>\n          <th>2017</th>\n          <th>2018</th>\n          </tr>\n        <tr>\n          <th>Snap Recipient Workers</th> <th></th>\n          <td>'
                      .concat(
                        Object(d.cma)(Object(d.find)(k, 1)),
                        "</td>\n          <td>"
                      )
                      .concat(
                        Object(d.cma)(Object(d.find)(k, 2)),
                        "</td>\n          <td>"
                      )
                      .concat(
                        Object(d.cma)(Object(d.find)(k, 3)),
                        "</td>\n        </tr>\n        <tr>\n          <th>Snap Recipient Workers by Percentage</th> <th></th>\n          <td>"
                      )
                      .concat(
                        Object(d.pcnt)(Object(d.find)(x, 1)),
                        "</td>\n          <td>"
                      )
                      .concat(
                        Object(d.pcnt)(Object(d.find)(x, 2)),
                        "</td>\n          <td>"
                      )
                      .concat(
                        Object(d.pcnt)(Object(d.find)(x, 3)),
                        "</td>\n        </tr>\n    "
                      )),
                    (I = ["y", "Amount"]),
                    (N = [
                      "Less than Highschool",
                      "Highschool",
                      "Some College",
                      "Bachelor's or Higher",
                    ]),
                    (C = ["2018Q1", "2018Q2", "2018Q3", "2018Q4"]),
                    (M = [
                      {
                        chart: pop_chart,
                        bounds: ["11%", "12%", "35%", "65%"],
                        categoryAxis: ["x", "Time"],
                        xtitle: "Years",
                        order: n,
                        measureAxis: I,
                        ytitle: "Total Population",
                        tickFormat: ",.0f",
                        series: "Indicator",
                        lineMarkers: !0,
                      },
                      {
                        chart: ppop_chart,
                        bounds: ["14%", "12%", "32%", 300],
                        categoryAxis: ["x", "Time"],
                        xtitle: "Years",
                        order: n,
                        measureAxis: I,
                        ytitle: "Total Population",
                        tickFormat: ",.0f",
                        series: "Indicator",
                        lineMarkers: !0,
                      },
                      {
                        chart: mhhi_chart,
                        bounds: ["56%", "12%", "35%", "65%"],
                        categoryAxis: ["x", "Time"],
                        xtitle: "Years",
                        order: n,
                        measureAxis: I,
                        ytitle: "Median Household Income",
                        tickFormat: "$,.0f",
                        series: "Indicator",
                        lineMarkers: !0,
                      },
                      {
                        chart: mhhi_chart_print,
                        bounds: ["62%", "12%", "32%", 300],
                        categoryAxis: ["x", "Time"],
                        xtitle: "Years",
                        order: n,
                        measureAxis: I,
                        ytitle: "Median Household Income",
                        tickFormat: "$,.0f",
                        series: "Indicator",
                        lineMarkers: !0,
                      },
                      {
                        chart: empl_edu_chart,
                        bounds: ["11%", "12%", "35%", "65%"],
                        categoryAxis: ["x", "Employment_Status"],
                        xtitle: "Employment Status",
                        order: N,
                        measureAxis: ["y", "Amount"],
                        ytitle: "Totals",
                        tickFormat: ",",
                        series: "Indicator_Status",
                        lineMarkers: !1,
                        colors: !1,
                      },
                      {
                        chart: pempl_edu_chart,
                        bounds: ["14%", "12%", "32%", 250],
                        categoryAxis: ["x", "Employment_Status"],
                        xtitle: "Employment Status",
                        order: N,
                        measureAxis: ["y", "Amount"],
                        ytitle: "Totals",
                        tickFormat: ",",
                        series: "Indicator_Status",
                        lineMarkers: !1,
                        colors: !1,
                      },
                      {
                        chart: empl_edu_gend_chart,
                        bounds: ["58%", "12%", "35%", "65%"],
                        categoryAxis: ["x", "Indicator_Status"],
                        xtitle: "Gender",
                        order: N,
                        measureAxis: ["y", "Unemployment_Rate"],
                        ytitle: "Unemployment Rate",
                        tickFormat: ".1%",
                        series: "Indicator_Status",
                        lineMarkers: !1,
                        colors: [
                          ["Male", "#3366ff", "black", 0.7],
                          ["Female", "pink", "black", 0.7],
                        ],
                      },
                      {
                        chart: pempl_edu_gend_chart,
                        bounds: ["62%", "12%", "32%", 300],
                        categoryAxis: ["x", "Indicator_Status"],
                        xtitle: "Gender",
                        order: N,
                        measureAxis: ["y", "Unemployment_Rate"],
                        ytitle: "Unemployment Rate",
                        tickFormat: ".1%",
                        series: "Indicator_Status",
                        lineMarkers: !1,
                        colors: [
                          ["Male", "#3366ff", "black", 0.7],
                          ["Female", "pink", "black", 0.7],
                        ],
                      },
                      {
                        chart: empl_race_ethn_chart,
                        bounds: ["11%", "12%", "35%", "65%"],
                        categoryAxis: ["x", "Indicator_Status"],
                        xtitle: " ",
                        order: ["White", "Black", "Asian", "Hispanic"],
                        measureAxis: ["y", "Unemployment_Rate"],
                        ytitle: "Unemployment Rate",
                        tickFormat: ".1%",
                        series: "Indicator_Status",
                        lineMarkers: !1,
                        colors: [
                          ["Black", "#ff8566", "black", 0.7],
                          ["White", "#99ccff", "black", 0.7],
                          ["Asian", "#4dffa6", "black", 0.7],
                          ["Hispanic", "#a366ff", "black", 0.7],
                        ],
                      },
                      {
                        chart: chart5,
                        bounds: ["58%", "12%", "35%", "65%"],
                        categoryAxis: ["x", "Indicator_Status"],
                        xtitle: " ",
                        order: ["White", "Hispanic"],
                        measureAxis: ["y", "Unemployment_Rate"],
                        ytitle: "Unemployment Rate",
                        tickFormat: ".1%",
                        series: "Indicator_Status",
                        lineMarkers: !1,
                        colors: [
                          ["White", "#99ccff", "black", 0.7],
                          ["Hispanic", "#a366ff", "black", 0.7],
                        ],
                      },
                      {
                        chart: pchart5,
                        bounds: ["62%", "12%", "32%", 300],
                        categoryAxis: ["x", "Indicator_Status"],
                        xtitle: " ",
                        order: ["White", "Hispanic"],
                        measureAxis: ["y", "Unemployment_Rate"],
                        ytitle: " ",
                        tickFormat: ".1%",
                        series: "Indicator_Status",
                        lineMarkers: !1,
                        colors: [
                          ["White", "#99ccff", "black", 0.7],
                          ["Hispanic", "#a366ff", "black", 0.7],
                        ],
                      },
                      {
                        chart: pempl_race_ethn_chart,
                        bounds: ["14%", "12%", "32%", 250],
                        categoryAxis: ["x", "Indicator_Status"],
                        xtitle: " ",
                        order: ["White", "Black", "Asian", "Hispanic"],
                        measureAxis: ["y", "Unemployment_Rate"],
                        ytitle: " ",
                        tickFormat: ".1%",
                        series: "Indicator_Status",
                        lineMarkers: !1,
                        colors: [
                          ["Black", "#ff8566", "black", 0.7],
                          ["White", "#99ccff", "black", 0.7],
                          ["Asian", "#4dffa6", "black", 0.7],
                          ["Hispanic", "#a366ff", "black", 0.7],
                        ],
                      },
                      {
                        chart: empl_vet_chart,
                        bounds: ["9%", "12%", "80%", "65%"],
                        categoryAxis: ["x", "Indicator_Status"],
                        xtitle: " ",
                        order: ["Veteran", "Non Veteran"],
                        measureAxis: ["y", "Unemployment_Rate"],
                        ytitle: "Unemployment Rate",
                        tickFormat: ".1%",
                        series: "Indicator_Status",
                        lineMarkers: !1,
                        colors: [
                          ["Veteran", "#248f24", "black", 0.7],
                          ["Non Veteran", "#33cccc", "black", 0.7],
                        ],
                      },
                      {
                        chart: empl_vet_print_chart,
                        bounds: ["13%", "12%", "80%", "65%"],
                        categoryAxis: ["x", "Indicator_Status"],
                        xtitle: " ",
                        order: ["Veteran", "Non Veteran"],
                        measureAxis: ["y", "Unemployment_Rate"],
                        ytitle: "Unemployment Rate",
                        tickFormat: ".1%",
                        series: "Indicator_Status",
                        lineMarkers: !1,
                        colors: [
                          ["Veteran", "#248f24", "black", 0.7],
                          ["Non Veteran", "#33cccc", "black", 0.7],
                        ],
                      },
                      {
                        chart: emp_dis_chart,
                        bounds: ["8%", "12%", "35%", "65%"],
                        categoryAxis: ["x", "Employment_Status"],
                        xtitle: "Employment Status",
                        order: !1,
                        measureAxis: ["y", "Amount"],
                        ytitle: "Disability Status",
                        tickFormat: ",.0f",
                        series: "Indicator_Status",
                        lineMarkers: !0,
                        lineWeight: 0,
                        colors: !1,
                      },
                      {
                        chart: emp_dis_chart_print,
                        bounds: ["8%", "12%", "35%", "65%"],
                        categoryAxis: ["x", "Employment_Status"],
                        xtitle: "Employment Status",
                        order: !1,
                        measureAxis: ["y", "Amount"],
                        ytitle: "Disability Status",
                        tickFormat: ",.0f",
                        series: "Indicator_Status",
                        lineMarkers: !0,
                        lineWeight: 0,
                        colors: !1,
                      },
                      {
                        chart: pempl_status_chart,
                        bounds: ["58%", "12%", "35%", "65%"],
                        categoryAxis: ["x", "Employment_Status"],
                        xtitle: "Employment Status",
                        order: !1,
                        measureAxis: ["y", "Amount"],
                        ytitle: "Povery Status",
                        tickFormat: ",.0f",
                        series: "Indicator_Status",
                        lineMarkers: !1,
                        colors: !1,
                      },
                      {
                        chart: empl_status_chart,
                        bounds: ["58%", "12%", "35%", "65%"],
                        categoryAxis: ["x", "Employment_Status"],
                        xtitle: "Employment Status",
                        order: !1,
                        measureAxis: ["y", "Amount"],
                        ytitle: "Povery Status",
                        tickFormat: ",.0f",
                        series: "Indicator_Status",
                        lineMarkers: !1,
                        colors: !1,
                      },
                      {
                        chart: tanf_attainment_chart,
                        bounds: ["8%", "12%", "20%", "65%"],
                        categoryAxis: ["x", "Time"],
                        xtitle: " ",
                        order: C,
                        measureAxis: ["y", "Amount"],
                        ytitle: "Workers receiving TANF benefits",
                        tickFormat: ",.0f",
                        series: "Indicator",
                        lineMarkers: !0,
                        colors: !1,
                      },
                      {
                        chart: tanf_data,
                        bounds: ["30%", "12%", "20%", "65%"],
                        categoryAxis: ["x", "Time"],
                        xtitle: " ",
                        order: C,
                        measureAxis: ["y", "Amount"],
                        ytitle: "Recipients amongst MD Workers",
                        tickFormat: ",.0f",
                        series: "Indicator",
                        lineMarkers: !0,
                        colors: !1,
                      },
                      {
                        chart: tanf_rate_chart,
                        bounds: ["52%", "12%", "20%", "65%"],
                        categoryAxis: ["x", "Time"],
                        xtitle: " ",
                        order: C,
                        measureAxis: ["y", "Amount"],
                        ytitle: "Workforce/Service in TANF (%)",
                        tickFormat: ",.0f",
                        series: "Indicator",
                        lineMarkers: !0,
                        colors: !1,
                      },
                      {
                        chart: tanf_perc_chart,
                        bounds: ["78%", "12%", "20%", "65%"],
                        categoryAxis: ["x", "Time"],
                        xtitle: " ",
                        order: C,
                        measureAxis: ["y", "Amount"],
                        ytitle: "Percent of Workers in TANF (%)",
                        tickFormat: ".1%",
                        series: "Indicator",
                        lineMarkers: !0,
                        colors: !1,
                      },
                      {
                        chart: ptanf_data,
                        bounds: ["74%", "12%", "22%", "60%"],
                        categoryAxis: ["x", "Time"],
                        xtitle: " ",
                        order: C,
                        measureAxis: ["y", "Amount"],
                        ytitle: "Recipients amongst MD Workers",
                        tickFormat: ".1%",
                        series: "Indicator",
                        lineMarkers: !0,
                        colors: !1,
                      },
                      {
                        chart: ptanf_rate_chart,
                        bounds: ["51%", "12%", "22%", "60%"],
                        categoryAxis: ["x", "Time"],
                        xtitle: " ",
                        order: C,
                        measureAxis: ["y", "Amount"],
                        ytitle: "Workforce/Service in TANF (%)",
                        tickFormat: ",.0f",
                        series: "Indicator",
                        lineMarkers: !0,
                        colors: !1,
                      },
                      {
                        chart: ptanf_perc_chart,
                        bounds: ["30%", "12%", "22%", "60%"],
                        categoryAxis: ["x", "Time"],
                        xtitle: " ",
                        order: C,
                        measureAxis: ["y", "Amount"],
                        ytitle: "Percent of Workers in TANF (%)",
                        tickFormat: ".1%",
                        series: "Indicator",
                        lineMarkers: !0,
                        colors: !1,
                      },
                      {
                        chart: ptanf_attainment_chart,
                        bounds: ["7%", "12%", "22%", "60%"],
                        categoryAxis: ["x", "Time"],
                        xtitle: " ",
                        order: C,
                        measureAxis: ["y", "Amount"],
                        ytitle: "Workers receiving TANF benefits",
                        tickFormat: ",.0f",
                        series: "Indicator",
                        lineMarkers: !0,
                        colors: !1,
                      },
                      {
                        chart: snap_chart,
                        bounds: ["11%", "12%", "35%", "65%"],
                        categoryAxis: ["x", "Time"],
                        xtitle: "Year",
                        order: !1,
                        measureAxis: ["y", "Amount"],
                        ytitle: "Amount",
                        tickFormat: ",",
                        series: "Indicator",
                        lineMarkers: !1,
                        colors: !1,
                      },
                      {
                        chart: snap_chart2,
                        bounds: ["58%", "12%", "35%", "65%"],
                        categoryAxis: ["x", "Time"],
                        xtitle: "Year",
                        order: !1,
                        measureAxis: ["y", "Amount"],
                        ytitle: "Percent",
                        tickFormat: ".2%",
                        series: "Indicator",
                        lineMarkers: !1,
                        colors: !1,
                      },
                      {
                        chart: psnap_chart,
                        bounds: ["14%", "12%", "32%", 250],
                        categoryAxis: ["x", "Year"],
                        xtitle: "Year",
                        order: !1,
                        measureAxis: ["y", "Amount"],
                        ytitle: "Amount",
                        tickFormat: ",",
                        series: "Indicator",
                        lineMarkers: !1,
                        colors: !1,
                      },
                      {
                        chart: psnap_chart2,
                        bounds: ["62%", "12%", "32%", 300],
                        categoryAxis: ["x", "Year"],
                        xtitle: "Year",
                        order: !1,
                        measureAxis: ["y", "Amount"],
                        ytitle: "Percent",
                        tickFormat: ".2%",
                        series: "Indicator",
                        lineMarkers: !1,
                        colors: !1,
                      },
                    ]),
                    emplStatusCounties.includes(CountyName) ||
                      (M.push({
                        chart: window.work_exp_pov_chart,
                        bounds: ["11%", "12%", "80%", "60%"],
                        categoryAxis: ["x", "Indicator_Status"],
                        xtitle: " ",
                        order: [
                          "N/A",
                          "No School",
                          "Nursery",
                          "Kindergarten",
                          "Grade 1",
                          "Grade 2",
                          "Grade 3",
                          "Grade 4",
                          "Grade 5",
                          "Grade 6",
                          "Grade 7",
                          "Grade 8",
                          "Grade 9",
                          "Grade 10",
                          "Grade 11",
                          "Grade 12",
                          "GED",
                          "Highschool",
                          "Professional",
                          "Some College",
                          "Associate",
                          "Bachlor's",
                          "Master's",
                          "Doctoral",
                          "1 or More",
                          "0-25",
                          "26-50",
                          "51-75",
                          "76-100",
                          "100-500",
                          "501",
                        ],
                        measureAxis: ["y", "Amount"],
                        ytitle: "Number of Workers",
                        tickFormat: ",.0f",
                        series: "Employment_Status",
                        lineMarkers: !0,
                        colors: !1,
                        legend: ["26%", "5%", "50%", "70%", "right"],
                      }),
                      M.push({
                        chart: pwork_exp_pov_chart,
                        bounds: ["15%", "12%", "65%", "50%"],
                        categoryAxis: ["x", "Indicator_Status"],
                        xtitle: " ",
                        order: [
                          "N/A",
                          "No School",
                          "Nursery",
                          "Kindergarten",
                          "Grade 1",
                          "Grade 2",
                          "Grade 3",
                          "Grade 4",
                          "Grade 5",
                          "Grade 6",
                          "Grade 7",
                          "Grade 8",
                          "Grade 9",
                          "Grade 10",
                          "Grade 11",
                          "Grade 12",
                          "GED",
                          "Highschool",
                          "Professional",
                          "Some College",
                          "Associate",
                          "Bachlor's",
                          "Master's",
                          "Doctoral",
                          "1 or More",
                          "0-25",
                          "26-50",
                          "51-75",
                          "76-100",
                          "100-500",
                          "501",
                        ],
                        measureAxis: ["y", "Amount"],
                        ytitle: "Number of Workers",
                        tickFormat: ",.0f",
                        series: "Employment_Status",
                        lineMarkers: !0,
                        colors: !1,
                        legend: ["16%", "90%", "50%", "70%", "right"],
                      })),
                    Object(d.createChart)(M),
                    (window.countyChartChange = function () {
                      var t = countyLookup.filter(function (t) {
                          return t.tab == localStorage.getItem("Clicked");
                        })[0],
                        e = document.querySelector("#dropdownMenuY"),
                        a = e.value,
                        n = t.data[a];
                      if (new Blob([JSON.stringify(n)]).size < 20)
                        for (var r = !1; !r; ) {
                          var c = Object.keys(t.data);
                          (a = c[Math.floor(Math.random() * c.length)]),
                            (r = e.value != a),
                            console.log({ notTheSame: r }, e.value, a),
                            r && ((e.value = a), (n = t.data[a]));
                        }
                      var o = t.lbl,
                        i = t.yearAvailable[a],
                        l =
                          !!i &&
                          i.some(function (t) {
                            return !t;
                          });
                      if (
                        ((document.querySelector(
                          "#notalldataavailablewarning"
                        ).style.display = l ? "inline" : "none"),
                        console.log({ notAllChartsAvailable: l }),
                        "Temporary Aid for Needy Families (TANF) Stats" == o &&
                          display_tanf_table(
                            a.replace("data", "20"),
                            t.charts[0].data,
                            t.charts[1].data,
                            t.charts[2].data,
                            t.charts[3].data
                          ),
                        "Employment Status amongst Maryland Workers" == o)
                      ) {
                        var d = document.getElementById("emplStatus_categ_dd"),
                          s = d.options[d.selectedIndex].text;
                        i && i[0];
                        "Gender" == s &&
                          (t.charts[0].data = i && i[0] ? n[0] : []),
                          "Race" == s &&
                            (t.charts[0].data = i && i[1] ? n[1] : []),
                          "Education" == s &&
                            (t.charts[0].data = i && i[2] ? n[2] : []),
                          "Poverty" == s &&
                            (t.charts[0].data = i && i[3] ? n[3] : []),
                          t.charts[0].draw();
                      } else {
                        var p = document.querySelector(t.svgName);
                        for (var u in t.charts) {
                          var m = i && i[u];
                          p.querySelectorAll(".dimple-chart")[u];
                          (t.charts[u].data = m ? n[u] : []),
                            t.charts[u].draw();
                        }
                      }
                      drawAll();
                    }),
                    i.select("#dropdownMenuY").on("change", countyChartChange),
                    i
                      .select("#emplStatus_categ_dd")
                      .on("change", countyChartChange);
                case 90:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      )();
    },
  },
]);
