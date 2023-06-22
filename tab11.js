var CHECKBOX, LEVEL, HOBBY, experience, SELECTBOX, CLIENT_ALT_GOAL, budget, tab5, tab6;


var we_tabs_next_button = '[bloc=next-tab]';
    var we_tabs_prev_button = '[bloc=prev-tab]';
    var we_tabs_active_class = 'active';

    var we_activeTab,we_indexOfActiveTab, we_indexOfNextTab, we_indexOfPrevTab, we_prevTab, we_amountOfTabs, nextTab;

    var tabList = ['CHECKBOX'];

    openTab(tabList[0]);

    $(we_tabs_next_button).on("click", function () {
      var activeTab = $(".w--tab-active").attr("data-w-tab");
      var indexOfActiveTab = tabList.indexOf(activeTab);
      var indexOfNextTab = indexOfActiveTab + 1;
      var nextTab = tabList[indexOfNextTab];
      var amountOfTabs = tabList.length;
      var attrNextTab = $('.w--tab-active').attr('next-tab');

      openTab(attrNextTab);

      attrNextTab = $('.w--tab-active').attr('next-tab');

      if (typeof attrNextTab !== 'undefined' && attrNextTab !== false) {
        $(we_tabs_next_button).addClass(we_tabs_active_class);
      } else {
        $(we_tabs_next_button).removeClass(we_tabs_active_class);
      }

      if (amountOfTabs > 1) {
        $(we_tabs_prev_button).addClass(we_tabs_active_class);
      }
    });

    $(we_tabs_prev_button).on("click", function () {
      var activeTab = $(".w--tab-active").attr("data-w-tab");
      var indexOfActiveTab = tabList.indexOf(activeTab);
      var indexOfPrevTab = indexOfActiveTab - 1;
      var prevTab = tabList[indexOfPrevTab];

      var attrPrevTab = $('.w--tab-active').attr('prev-tab');

      if (indexOfActiveTab > 0) {
        openTab(attrPrevTab);
        $(we_tabs_next_button).addClass(we_tabs_active_class);
      }

      if (indexOfActiveTab <= 1) {
        $(we_tabs_prev_button).removeClass(we_tabs_active_class);
      } else {
        $(we_tabs_prev_button).addClass(we_tabs_active_class);
      }
    });

    function openTab(tab) {
      var tab_link = "a[data-w-tab=" + tab;
      tab = "div[data-w-tab=" + tab;

      $(tab).siblings().removeClass("w--tab-active");
      $(tab).addClass("w--tab-active");
      $(tab_link).siblings("a").removeClass("w--current");
      $(tab_link).addClass("w--current");
    }$("[name=CHECKBOX]").on("input", function () {
    CHECKBOX = getValueFromInput("CHECKBOX");
      if ($("[name=CHECKBOX]").val() == 1) {

        nextTab = 'LEVEL';
        we_activeTab = $(".w--tab-active").attr("data-w-tab");
        we_indexOfActiveTab = tabList.indexOf(we_activeTab);
        we_indexOfNextTab = we_indexOfActiveTab + 1;
        we_indexOfPrevTab = we_indexOfActiveTab - 1;
        we_prevTab = tabList[we_indexOfPrevTab];
        we_amountOfTabs = tabList.length;

        if (we_indexOfNextTab < we_amountOfTabs) {
          tabList[we_indexOfNextTab] = nextTab;
        } else {
          tabList.push(nextTab);
        }
        $(we_tabs_next_button).addClass(we_tabs_active_class);
        $(".w--tab-active").attr('next-tab',nextTab);
        $($('[data-w-tab=LEVEL]')).attr('prev-tab',we_activeTab);

        } else if ($("[name=CHECKBOX]").val() == 2) {

        nextTab = 'SELECTBOX';
        we_activeTab = $(".w--tab-active").attr("data-w-tab");
        we_indexOfActiveTab = tabList.indexOf(we_activeTab);
        we_indexOfNextTab = we_indexOfActiveTab + 1;
        we_indexOfPrevTab = we_indexOfActiveTab - 1;
        we_prevTab = tabList[we_indexOfPrevTab];
        we_amountOfTabs = tabList.length;

        if (we_indexOfNextTab < we_amountOfTabs) {
          tabList[we_indexOfNextTab] = nextTab;
        } else {
          tabList.push(nextTab);
        }
        $(we_tabs_next_button).addClass(we_tabs_active_class);
        $(".w--tab-active").attr('next-tab',nextTab);
        $($('[data-w-tab=SELECTBOX]')).attr('prev-tab',we_activeTab);

        }
});

    $("[name=CHECKBOX]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      CHECKBOX = getValueFromInput("CHECKBOX");
        if ($("[name=CHECKBOX]").val() == 1) {

        nextTab = 'LEVEL';
        we_activeTab = $(".w--tab-active").attr("data-w-tab");
        we_indexOfActiveTab = tabList.indexOf(we_activeTab);
        we_indexOfNextTab = we_indexOfActiveTab + 1;
        we_indexOfPrevTab = we_indexOfActiveTab - 1;
        we_prevTab = tabList[we_indexOfPrevTab];
        we_amountOfTabs = tabList.length;

        if (we_indexOfNextTab < we_amountOfTabs) {
          tabList[we_indexOfNextTab] = nextTab;
        } else {
          tabList.push(nextTab);
        }
        $(we_tabs_next_button).addClass(we_tabs_active_class);
        $(".w--tab-active").attr('next-tab',nextTab);
        $($('[data-w-tab=LEVEL]')).attr('prev-tab',we_activeTab);

        } else if ($("[name=CHECKBOX]").val() == 2) {

        nextTab = 'SELECTBOX';
        we_activeTab = $(".w--tab-active").attr("data-w-tab");
        we_indexOfActiveTab = tabList.indexOf(we_activeTab);
        we_indexOfNextTab = we_indexOfActiveTab + 1;
        we_indexOfPrevTab = we_indexOfActiveTab - 1;
        we_prevTab = tabList[we_indexOfPrevTab];
        we_amountOfTabs = tabList.length;

        if (we_indexOfNextTab < we_amountOfTabs) {
          tabList[we_indexOfNextTab] = nextTab;
        } else {
          tabList.push(nextTab);
        }
        $(we_tabs_next_button).addClass(we_tabs_active_class);
        $(".w--tab-active").attr('next-tab',nextTab);
        $($('[data-w-tab=SELECTBOX]')).attr('prev-tab',we_activeTab);

        }
});
    $("[name=LEVEL]").on("input", function () {
    LEVEL = getValueFromInput("LEVEL");

      nextTab = 'HOBBY';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=HOBBY]')).attr('prev-tab',we_activeTab);

      });

    $("[name=LEVEL]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      LEVEL = getValueFromInput("LEVEL");

      nextTab = 'HOBBY';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=HOBBY]')).attr('prev-tab',we_activeTab);

      });
    $("[name=HOBBY]").on("input", function () {
    HOBBY = getValueFromInput("HOBBY");

      nextTab = 'CLIENT_ALT_GOAL';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=CLIENT_ALT_GOAL]')).attr('prev-tab',we_activeTab);

      });

    $("[name=HOBBY]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      HOBBY = getValueFromInput("HOBBY");

      nextTab = 'CLIENT_ALT_GOAL';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=CLIENT_ALT_GOAL]')).attr('prev-tab',we_activeTab);

      });
    $("[name=experience]").on("input", function () {
    experience = getValueFromInput("experience");

      nextTab = 'tab5';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=tab5]')).attr('prev-tab',we_activeTab);

      });

    $("[name=experience]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      experience = getValueFromInput("experience");

      nextTab = 'tab5';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=tab5]')).attr('prev-tab',we_activeTab);

      });
    $("[name=budget]").on("input", function () {
    budget = getValueFromInput("budget");

      nextTab = 'tab6';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=tab6]')).attr('prev-tab',we_activeTab);

      });

    $("[name=budget]").parent("label.w-radio").on("click", function () {
      clickedRadioButtonValue = $("input", this).val();
      budget = getValueFromInput("budget");

      nextTab = 'tab6';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=tab6]')).attr('prev-tab',we_activeTab);

      });
