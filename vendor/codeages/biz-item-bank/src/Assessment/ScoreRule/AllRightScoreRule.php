<?php

namespace Codeages\Biz\ItemBank\Assessment\ScoreRule;

use Codeages\Biz\ItemBank\Answer\Service\AnswerQuestionReportService;

class AllRightScoreRule extends ScoreRule
{
    const RULE = 'all_right';

    public function review($questionResult, $score)
    {
        if ('right' == $questionResult['result']) {
            return ['status' => AnswerQuestionReportService::STATUS_RIGHT, 'score' => $score];
        }

        return ['status' => '', 'score' => 0];
    }

    public function processRule($question)
    {
        return [
            'name' => self::RULE,
            'score' => empty($question['score']) ? 0 : $question['score'],
        ];
    }

    public function setQuestionScore($question, $score)
    {
        $question['score'] = $score;

        return $question;
    }
}
