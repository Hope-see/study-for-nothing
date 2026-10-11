// ========================================
// HOME PAGE SCRIPT
// Only used by index.html.
//
// Handles opening/closing the level picker
// under each subject card. Navigating into
// an actual lesson (e.g. Math P1) is a plain
// link to that subject's own page, so no
// extra JS is needed for that part.
// ========================================

function showLevels(levelId) {

    const selectedLevels =
        document.getElementById(levelId);

    const allLevels =
        document.querySelectorAll(".levels");


    allLevels.forEach(function(level) {

        if (level !== selectedLevels) {
            level.classList.remove("show");
        }

    });


    selectedLevels.classList.toggle("show");
}