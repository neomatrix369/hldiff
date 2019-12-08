package ru.karvozavr.hldiff.steps

import org.junit.Test

import org.junit.Assert.*
import ru.karvozavr.hldiff.data.HighLevelDiff
import ru.karvozavr.hldiff.language.JavaLanguageInfo
import ru.karvozavr.hldiff.preprocessing.FilePairPreprocessor
import java.nio.file.Paths

class StatementActionsExtractionStepTest {

    val src = Paths.get(javaClass.classLoader.getResource("a.java")!!.toURI()).toString()
    val dst = Paths.get(javaClass.classLoader.getResource("b.java")!!.toURI()).toString()
    val lowLevelDiff = FilePairPreprocessor().processFilePair(src, dst)
    val hlDiff = HighLevelDiff(lowLevelDiff)

    @Test
    fun smokeTest() {
        val moveExtractionStep = MoveActionExtractionStep()
        val statementsActionsExtractionStep = StatementActionsExtractionStep(JavaLanguageInfo)
        val afterMove = moveExtractionStep.apply(hlDiff)

        val result = statementsActionsExtractionStep.apply(afterMove)
        result.highLevelEditScript.forEach { println(it) }
    }
}